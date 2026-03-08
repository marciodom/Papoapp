const CACHE_NAME = 'papoapp-v4';

const urlsToCache = [
  '/Papoapp/',
  '/Papoapp/index.html',
  '/Papoapp/manifest.json',
  '/Papoapp/icons/icon-192.png',
  '/Papoapp/icons/icon-512.png'
];

self.addEventListener('install', event => {
  console.log('Service Worker instalando...');
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto, adicionando arquivos...');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Erro no cache:', error);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service Worker ativando...');
  
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('Removendo cache antigo:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        
        return fetch(event.request)
          .then(response => {
            // Não cachear tudo, apenas o necessário
            return response;
          })
          .catch(() => {
            // Se estiver offline, tenta mostrar página offline
            return caches.match('/Papoapp/index.html');
          });
      })
  );
});