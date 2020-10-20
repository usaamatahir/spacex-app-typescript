var StaticCaches = "offline-caches";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(StaticCaches).then(function (cache) {
      return cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/bundle.js",
        "/index.html",
        "/",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      let requestURL = event.request.clone();

      return fetch(requestURL);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cachesName) {
      return Promise.all(
        cachesName
          .filter(function (cacheName) {
            return (
              cacheName.startsWith("offline-") && cacheName != StaticCaches
            );
          })
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});
