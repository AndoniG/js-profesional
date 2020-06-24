const VERSION = "V1";

// Self es igual a this pero para Service Workers
self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  // SOLO GET
  if (request.method !== "GET") return;

  // BUSCAR EN CACHE
  event.respondWith(cachedResponse(request));

  // ACTUALIZAR EL CACHE
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    // "/", // ES IMPORTANTE
    // "/index.html",
    // "/assets/index.js",
    // "/assets/MediaPlayer.js",
    // "/assets/plugins/AutoPlay.js",
    // "/assets/plugins/AutoPause.js",
    // "/assets/index.css",
    // "/assets/BigBuckBunny.mp4",
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}
