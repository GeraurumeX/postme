self.addEventListener("install", (event) => {
  console.log("[SW] Install ...");
});

self.addEventListener("activate", async (event) => {
  console.log("[SW] Activate ...");
});

self.addEventListener("fetch", (event) => {
  console.log("[SW] Fetch ...");
});
