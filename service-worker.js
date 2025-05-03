const CACHE_NAME = 'fitpulse-cache-v1';
const urlsToCache = [
  '/workout-app/',
  '/workout-app/exercise-data.json',
  '/workout-app/gym_icon_192.png',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
