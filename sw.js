self.addEventListener('install', (e) => {
  self.skipWaiting();
});
navigator.serviceWorker.register('./sw.js');
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
