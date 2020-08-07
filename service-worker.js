if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"742d2e80d409c2d735e45e6f34ab87f1","url":"coronavirus.ico"},{"revision":"6e1267d9d946b0236cdf6ffd02890894","url":"favicon.ico"},{"revision":"ad458a408937a76fa42d700c8c1d49a8","url":"index.html"},{"revision":"1591b133fbae5fca84cede331cad7769","url":"precache-manifest.1591b133fbae5fca84cede331cad7769.js"},{"revision":"21a6f4378495d39cad3a7a6c7dd6fde3","url":"static/css/7.20981966.chunk.css"},{"revision":"4cd74494e852189a400f50d5cae549a7","url":"static/css/9.8194510e.chunk.css"},{"revision":"6c0e8b578410e3906c6cb4e46871d062","url":"static/css/main.843892a3.chunk.css"},{"revision":"bd606fc99c6491928c000fb72345212d","url":"static/js/0.844e8fd4.chunk.js"},{"revision":"d85e506e9f07d511a60d2ac0c3001971","url":"static/js/1.b28d585b.chunk.js"},{"revision":"a7706d318417c92e35f3151f14ea3eed","url":"static/js/10.ee0f6b4f.chunk.js"},{"revision":"1d507ca15ecdce502d2ccb734edff82e","url":"static/js/11.ffe3fa01.chunk.js"},{"revision":"ed9592b91c13b9f0659e58682a14818d","url":"static/js/12.28fb40bd.chunk.js"},{"revision":"e80e788074201feb3206a1c1a640f229","url":"static/js/13.51175ab7.chunk.js"},{"revision":"f500164e3eedec13cedff9e09daf6f39","url":"static/js/14.efd3c10a.chunk.js"},{"revision":"f937f452a489d8900cad90546a978404","url":"static/js/15.ada54d0a.chunk.js"},{"revision":"80c73abc8098fde1ec776889f661dc2d","url":"static/js/16.a65c7e9f.chunk.js"},{"revision":"a65a0938b78ea337f750bdad6386e4a8","url":"static/js/17.ce290d36.chunk.js"},{"revision":"89c6573392cae2708521997fd5381966","url":"static/js/18.6d8ead60.chunk.js"},{"revision":"a81a939da28400ce330b4d3d1a975053","url":"static/js/19.8f8076a9.chunk.js"},{"revision":"572be4227f5951f106df8404d7cdbe4a","url":"static/js/2.2b61c1e8.chunk.js"},{"revision":"83864e1064f383e9df1621f2c562bec3","url":"static/js/20.2a5f3a6a.chunk.js"},{"revision":"be85289d2c2b7d8813175eb501502c8c","url":"static/js/21.5131f957.chunk.js"},{"revision":"a80f19722cc95cbf47739d1c5b372d98","url":"static/js/22.68afa519.chunk.js"},{"revision":"c8ab4e3cb7acdbc9c87633ccfe67f990","url":"static/js/3.38160c12.chunk.js"},{"revision":"ad1f0f415a60da47f884ba3ca3bf2d95","url":"static/js/6.602f32f9.chunk.js"},{"revision":"c643c6e151e1ea021ba2c29c4892cd97","url":"static/js/7.72df5718.chunk.js"},{"revision":"05a07f2896c80f8019579d4175c8ccb3","url":"static/js/8.467143ec.chunk.js"},{"revision":"6f11beff77cfcf671ac6bc03b94688c0","url":"static/js/9.175c60dc.chunk.js"},{"revision":"f157744539581611739e9c09f64db282","url":"static/js/main.1712da72.chunk.js"},{"revision":"7e9101d619b3d0e9ce601ec6699efb7b","url":"static/js/runtime-main.072c963b.js"},{"revision":"f8b1df51ba843179fa1cc9b53d58127a","url":"static/media/roboto-latin-100-italic.f8b1df51.woff2"},{"revision":"7370c3679472e9560965ff48a4399d0b","url":"static/media/roboto-latin-100-normal.7370c367.woff2"},{"revision":"14286f3ba79c6627433572dfa925202e","url":"static/media/roboto-latin-300-italic.14286f3b.woff2"},{"revision":"ef7c6637c68f269a882e73bcb57a7f6a","url":"static/media/roboto-latin-300-normal.ef7c6637.woff2"},{"revision":"51521a2a8da71e50d871ac6fd2187e87","url":"static/media/roboto-latin-400-italic.51521a2a.woff2"},{"revision":"479970ffb74f2117317f9d24d9e317fe","url":"static/media/roboto-latin-400-normal.479970ff.woff2"},{"revision":"db4a2a231f52e497c0191e8966b0ee58","url":"static/media/roboto-latin-500-italic.db4a2a23.woff2"},{"revision":"020c97dc8e0463259c2f9df929bb0c69","url":"static/media/roboto-latin-500-normal.020c97dc.woff2"},{"revision":"da0e717829e033a69dec97f1e155ae42","url":"static/media/roboto-latin-700-italic.da0e7178.woff2"},{"revision":"2735a3a69b509faf3577afd25bdf552e","url":"static/media/roboto-latin-700-normal.2735a3a6.woff2"},{"revision":"ebf6d1640ccddb99fb49f73c052c55a8","url":"static/media/roboto-latin-900-italic.ebf6d164.woff2"},{"revision":"9b3766ef4a402ad3fdeef7501a456512","url":"static/media/roboto-latin-900-normal.9b3766ef.woff2"}]);

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp(
        'https://dlag3y92c3.execute-api.us-east-1.amazonaws.com/prod/dashboard'
      ),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );

    workbox.routing.registerRoute(
      new RegExp(
        'https://dlag3y92c3.execute-api.us-east-1.amazonaws.com/prod/geo-data'
      ),
      new workbox.strategies.CacheFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
