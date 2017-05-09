var CACHE_NAME = 'gih-cache-v4';
var CACHED_URLS = [
  'offline.html',
  'style.css',
    'img/browse.png',
    'img/favourite.png',
    'img/settings.png',
    'img/location.png',
    'img/nailsalons.png',
    'img/mobiletechs.png',
    'img/acrylics.png',
    'img/gels.png',
    'favicon.ico'
];


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        } else if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('offline.html');
        }
      });
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (CACHE_NAME !== cacheName && cacheName.startsWith('gih-cache')) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
