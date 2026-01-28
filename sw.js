const CACHE_NAME = 'velare-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './Logo.png',
  'https://unpkg.com/lucide@latest',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
