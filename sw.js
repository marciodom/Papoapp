const CACHE_NAME = 'papoapp-v3';

const urlsToCache = [
  '/Papoapp/',
  '/Papoapp/index.html',
  '/Papoapp/manifest.json',
  '/Papoapp/icons/icon-192.png',
  '/Papoapp/icons/icon-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener('fetch', event => {

  event.respondWith(
    caches.match(event.request)
      .then(response => {

        if (response) {
          return response;
        }

        return fetch(event.request).catch(() => {
          return caches.match('/Papoapp/index.html');
        });

      })
  );

});