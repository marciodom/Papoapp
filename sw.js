const CACHE_NAME = 'papoapp-v6';

const urlsToCache = [
  '/Papoapp/',
  '/Papoapp/index.html',
  '/Papoapp/manifest.json',
  '/Papoapp/icons/icon-192.png',
  '/Papoapp/icons/icon-512.png'
];

self.addEventListener('install', event => {
  console.log('📦 Service Worker instalando...');
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('✅ Adicionando arquivos ao cache...');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('❌ Erro no cache:', error);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('⚡ Service Worker ativando...');
  
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('🗑️ Removendo cache antigo:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker ativo e controlando as páginas');
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  // Ignorar requisições para o Supabase (API)
  if (event.request.url.includes('supabase.co')) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna do cache se existir
        if (response) {
          return response;
        }
        
        // Busca da rede se não estiver no cache
        return fetch(event.request)
          .then(response => {
            // Verifica se é uma resposta válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            return response;
          })
          .catch(() => {
            console.log('📴 Offline - mostrando fallback');
            return caches.match('/Papoapp/index.html');
          });
      })
  );
});