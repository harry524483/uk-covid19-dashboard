if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"742d2e80d409c2d735e45e6f34ab87f1","url":"coronavirus.ico"},{"revision":"6e1267d9d946b0236cdf6ffd02890894","url":"favicon.ico"},{"revision":"d50e9ea5daa5e5de18b9a60337d69d2c","url":"index.html"},{"revision":"2cefcb6238228bd2ac944e0c2b43f7f3","url":"precache-manifest.2cefcb6238228bd2ac944e0c2b43f7f3.js"},{"revision":"8fccccef7b28cb62051a6fcc359bd5f1","url":"static/css/10.8194510e.chunk.css"},{"revision":"6cc47e06222ef9f9061f25c696c6504c","url":"static/css/8.20981966.chunk.css"},{"revision":"6c0e8b578410e3906c6cb4e46871d062","url":"static/css/main.843892a3.chunk.css"},{"revision":"f85984c20b6edb103c613d1246543aa2","url":"static/js/0.fa5d0d1d.chunk.js"},{"revision":"b278eaa3553232704166574a16049cd9","url":"static/js/1.a0db0a02.chunk.js"},{"revision":"559cb10e6de45d26dd1ba1b58ce2aa2e","url":"static/js/10.e6c37858.chunk.js"},{"revision":"b8dfe60f169c851552eb457d4209cf43","url":"static/js/11.647ac047.chunk.js"},{"revision":"78b1127a5908f9ff7a7aeefa78dd5211","url":"static/js/12.66eeda3a.chunk.js"},{"revision":"83816d906376f81bc41eb3c6390a9ca7","url":"static/js/13.9d5c8ea6.chunk.js"},{"revision":"1c6e6854d95bedc0b31e5846fe02f92b","url":"static/js/14.0b6e2106.chunk.js"},{"revision":"cd60ef7090af257d304404aef7dd73a1","url":"static/js/15.15d297ad.chunk.js"},{"revision":"0dac6b6b8d3a140b581e0a80add1d109","url":"static/js/16.8b30db14.chunk.js"},{"revision":"1844ede5d517755a494cda24f7738299","url":"static/js/17.9b8c5198.chunk.js"},{"revision":"d2d577c9968b448f51230ca0981d4b9b","url":"static/js/18.ae137754.chunk.js"},{"revision":"3a545b37e0a1b435d2a5fa05b8123a33","url":"static/js/19.f8fa942a.chunk.js"},{"revision":"0affc3696f8e8969a9ecbf812dda2f01","url":"static/js/2.07036390.chunk.js"},{"revision":"5a5961d016f1071a00aa4726e07e1b1e","url":"static/js/20.91afc57f.chunk.js"},{"revision":"62d2118f747ea1ccf0a31f420ed0b389","url":"static/js/21.01ff8940.chunk.js"},{"revision":"36adcb029a304ad0b01a1b6d6482e617","url":"static/js/22.0b15c7ea.chunk.js"},{"revision":"aceb3c91b6b13dbcf9a7554ddb7a60e6","url":"static/js/23.01e7c0ee.chunk.js"},{"revision":"14eca93e00b7911699a626723e87ad77","url":"static/js/24.8e748d3e.chunk.js"},{"revision":"b06a377b6c1564c627cc2546693e41ff","url":"static/js/25.70d904b1.chunk.js"},{"revision":"365c647dbdf977cd7832fd1c7253458c","url":"static/js/3.f2ba1eab.chunk.js"},{"revision":"81722f2205ca189a94329f8d213cbee2","url":"static/js/4.2cd4e87f.chunk.js"},{"revision":"ec5000d6169a919f9c2f82cdbcc45782","url":"static/js/7.9ee4ca9b.chunk.js"},{"revision":"0804c548543ea675731da1f64eb3391c","url":"static/js/8.bd82cc9a.chunk.js"},{"revision":"91b96b2b724b605e5709c6883f4e9cbf","url":"static/js/9.8c81abd8.chunk.js"},{"revision":"311efaa3ad3eaf37b1ce3a2cca9a7700","url":"static/js/main.621bad0d.chunk.js"},{"revision":"b44221de3893f5fb8eaa6aaa5a87a2be","url":"static/js/runtime-main.76d273d8.js"},{"revision":"f8b1df51ba843179fa1cc9b53d58127a","url":"static/media/roboto-latin-100-italic.f8b1df51.woff2"},{"revision":"7370c3679472e9560965ff48a4399d0b","url":"static/media/roboto-latin-100-normal.7370c367.woff2"},{"revision":"14286f3ba79c6627433572dfa925202e","url":"static/media/roboto-latin-300-italic.14286f3b.woff2"},{"revision":"ef7c6637c68f269a882e73bcb57a7f6a","url":"static/media/roboto-latin-300-normal.ef7c6637.woff2"},{"revision":"51521a2a8da71e50d871ac6fd2187e87","url":"static/media/roboto-latin-400-italic.51521a2a.woff2"},{"revision":"479970ffb74f2117317f9d24d9e317fe","url":"static/media/roboto-latin-400-normal.479970ff.woff2"},{"revision":"db4a2a231f52e497c0191e8966b0ee58","url":"static/media/roboto-latin-500-italic.db4a2a23.woff2"},{"revision":"020c97dc8e0463259c2f9df929bb0c69","url":"static/media/roboto-latin-500-normal.020c97dc.woff2"},{"revision":"da0e717829e033a69dec97f1e155ae42","url":"static/media/roboto-latin-700-italic.da0e7178.woff2"},{"revision":"2735a3a69b509faf3577afd25bdf552e","url":"static/media/roboto-latin-700-normal.2735a3a6.woff2"},{"revision":"ebf6d1640ccddb99fb49f73c052c55a8","url":"static/media/roboto-latin-900-italic.ebf6d164.woff2"},{"revision":"9b3766ef4a402ad3fdeef7501a456512","url":"static/media/roboto-latin-900-normal.9b3766ef.woff2"}]);

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
