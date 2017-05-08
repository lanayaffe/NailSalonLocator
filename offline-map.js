document.getElementById('map').classList.add('offline-map');

 // Handle requests for Google Maps JavaScript API file

CACHED_URLS.indexOf(requestURL.href) === -1 || } 
    else if (requestURL.href === googleMapsAPIJS) {
        event.respondWith(
          fetch(
            googleMapsAPIJS+'&'+Date.now(),
            { mode: 'no-cors', cache: 'no-store' }
          ).catch(function() {
            return caches.match('offline-map.js');
          })
        );
