const staticDevCoffee = "vandelvira_eventos"
const assets = [
  "/",
  "/index.html",
  "/moment.js",
  "/PRINCIPAL_DEGRADADO.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})