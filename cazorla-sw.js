/* Service Worker — companion de index.html */
const CACHE = 'cazorla-field-v5';
const INDEX = 'index.html';
const FONT_CSS = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@600;700;800&display=swap';
const CORE = [INDEX, FONT_CSS, 'https://cdn.tailwindcss.com'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(CORE).catch(() => Promise.resolve()))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = e.request.url;

  /* HTML: red primero para no quedarse con un index.html antiguo en caché */
  if (url.includes('index.html') || e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          if (res?.status === 200) {
            caches.open(CACHE).then((c) => c.put(e.request, res.clone()));
          }
          return res;
        })
        .catch(() => caches.match(e.request).then((c) => c || caches.match(INDEX)))
    );
    return;
  }

  if (
    url.includes('cdn.tailwindcss.com') ||
    url.includes('fonts.googleapis') ||
    url.includes('fonts.gstatic.com')
  ) {
    e.respondWith(
      caches.match(e.request).then((cached) => {
        const network = fetch(e.request)
          .then((res) => {
            if (res?.status === 200) {
              caches.open(CACHE).then((c) => c.put(e.request, res.clone()));
            }
            return res;
          })
          .catch(() => cached);
        return cached || network;
      })
    );
  }
});
