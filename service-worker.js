const CACHE_NAME = 'fitpulse-cache-v1';
const urlsToCache = [
  '/workout-app/',
  '/workout-app/exercise-data.json',
  '/workout-app/gym_icon_192.png',
  'https://cdn.tailwindcss.com',
  // Day 1 image URLs
  'https://cdn.jefit.com/assets/img/exercises/gifs/86.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/21.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/90.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/818.gif',
  'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/dumbbellcurl-1457043876.gif',
  'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/hammercurl-1456956209.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/874.gif'

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
