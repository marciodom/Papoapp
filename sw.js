const CACHE_NAME = 'papoapp-v2';

const urlsToCache = [
  '/Papoapp/',
  '/Papoapp/index.html',
  '/Papoapp/manifest.json',
  '/Papoapp/icons/icon-192.png',
  '/Papoapp/icons/icon-512.png'
];

// INSTALAÇÃO
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// ATIVAÇÃO
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Deletando cache antigo:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// FETCH (estratégia cache first)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {

        // se estiver no cache
        if (response) {
          return response;
        }

        // senão busca na rede
        return fetch(event.request)
          .catch(() => {
            // fallback se offline
            if (event.request.mode === 'navigate') {
              return caches.match('/Papoapp/index.html');
            }
          });

      })
  );
});