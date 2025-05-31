const CACHE_NAME = 'fitpulse-cache-v1';
const urlsToCache = [
  '/workout-app/',
  '/workout-app/exercise-data.json',
  '/workout-app/gym_icon_192.png',
  'https://cdn.tailwindcss.com',
  // Day 1
  'https://cdn.jefit.com/assets/img/exercises/gifs/86.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/21.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/90.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/818.gif',
  'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/dumbbellcurl-1457043876.gif',
  'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/hammercurl-1456956209.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/874.gif',
  // Day 2
  'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2021/09/bench-press.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/41.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/31.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/14.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/149.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/247.gif',
  'https://barbend.com/wp-content/uploads/2022/05/barbell-skull-crusher-barbend-movement-gif-masters.gif',
  // Day 3
  'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/leg-press.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/130.gif',
  'https://burnfit.io/wp-content/uploads/2023/11/SEAT_LEG_CURL.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/1225.gif',
  'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/gobletsquat-1457030891.gif',
  'https://lh7-us.googleusercontent.com/LGpo5EbCLMKP3wY7iTQ6EiR0wDwDd1cPWrTMciiLXPdpfwH6DyURDgHQ-rGB1myEpzBi8KrTro_GXxzYLnicOX7vVs90SRTHERAPYIB_77RSRHNOWl4LBZ7HwaNu0tsbX7Lf1lpgoEmA8QHaT5zNQ3A',
  'https://cdn.jefit.com/assets/img/exercises/gifs/142.gif',
  // Day 4 (up to Exercise 4)
  'https://barbend.com/wp-content/uploads/2023/12/seated-dumbbell-shoulder-press-barbend-movement-gif-masters-2.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/32.gif',
  'https://i.pinimg.com/originals/e1/59/bf/e159bff8b4544f32c221cf6eb12c6a68.gif',
  'https://cdn.jefit.com/assets/img/exercises/gifs/1108.gif',
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
