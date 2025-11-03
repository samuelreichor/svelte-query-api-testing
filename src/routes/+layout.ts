	import { initQueryApi } from '$lib/config.svelte';
  
	initQueryApi({
    baseUrl: 'https://backend-craftcms.ddev.site:8443',
    authToken: 'Bearer tyE9LViYm0HvcVbUErN1wwIa3qyeby1K',
    debug: true,
    siteDetectionMode: 'origin',
    siteMap: [
      {
        handle: 'en',
        path: '/',
        origin: 'http://localhost:5173',
        id: 1,
      },
      {
        handle: 'de',
        path: '/de',
        origin: 'http://localhost:5173/de',
        id: 2,
      },
      {
        handle: 'es',
        path: '/es',
        origin: 'http://localhost:5173/es',
        id: 3,
      },
    ],
	});
