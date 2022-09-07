export const getCachedData = async (cacheName: string, url: string) => {
  const cacheStorage = await caches.open(cacheName);
  const cachedResponse = await cacheStorage.match(url);

  if (!cachedResponse || !cachedResponse.ok) {
    return false;
  }

  return await cachedResponse.json();
};

export const deleteOldCaches = async (cacheName: string) => {
  const keys = await caches.keys();

  for (const key of keys) {
    const isOurCache = key.startsWith("myapp-");
    if (cacheName === key || !isOurCache) {
      continue;
    }
    caches.delete(key);
  }
};

export const getData = async (cacheName: string, url: string) => {
  let cachedData = await getCachedData(cacheName, url);

  if (cachedData) return cachedData;

  const cacheStorage = await caches.open(cacheName);
  await cacheStorage.add(url);

  cachedData = await getCachedData(cacheName, url);
  await deleteOldCaches(cacheName);

  return cachedData;
};
