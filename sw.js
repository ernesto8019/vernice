const CACHE_NAME = 'paintcalc-v1';
const ASSETS = [
  './index.html',
  './manifest.json'
];

// Installazione e salvataggio file base
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Gestione delle richieste (per far funzionare l'app offline)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
