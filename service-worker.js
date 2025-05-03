const CACHE_NAME = 'gym-plan-v1';
const urlsToCache = [
    '/index.html',
    'https://cdn.tailwindcss.com',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lat_Pulldown/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Cable_Row/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Dumbbell_Row/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Inverted_Row/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Curl/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Curl/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Press/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Flye/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crossover/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tricep_Pushdown/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Dumbbell_Extension/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Skull_Crusher/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extension/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Curl/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Step_Up/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Goblet_Squat/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bulgarian_Split_Squat/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Raise/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lateral_Raise/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Raise/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rear_Delt_Fly/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crunch/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bicycle_Crunch/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Russian_Twist/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg'
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

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});