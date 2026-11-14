// Canivete — service worker v0.9.0
// Arquivos do app: rede primeiro (as atualizações do GitHub aparecem logo); sem internet, usa o que está guardado.
const CACHE = 'canivete-0.9.0';
const BASICOS = ['./', 'index.html', 'memoria.html', 'atelie.html', 'estudo.html', 'planejar.html', 'mammoth.min.js', 'docx.min.js', 'jspdf.umd.min.js', 'porteiro.js', 'manifest.json', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png', 'icon-maskable.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASICOS)).catch(() => {}).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  if (u.search.includes('nocache=')) return;   // verificação de versão: sempre da rede
  e.respondWith(fetch(e.request).then(res => {
    if (res.ok) { const c = res.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); }
    return res;
  }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html'))));
});
