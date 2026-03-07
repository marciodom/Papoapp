const CACHE_NAME = 'papoapp-v2';

const urlsToCache = [
    '/Papoapp/',
    '/Papoapp/index.html',
    '/Papoapp/manifest.json',
    '/Papoapp/icons/icon-192.png',
    '/Papoapp/icons/icon-512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});