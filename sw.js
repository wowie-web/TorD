const cacheName = 'velare-offline-v1';
const assets = [
  './',
  './index.html',
  './Logo.png',
  'https://unpkg.com/lucide@latest',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});