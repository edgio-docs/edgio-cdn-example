import { Router } from '@layer0/core/router'
import { starterRoutes } from '@layer0/starter'
import { CACHE_ASSETS } from './cache'
import routeHandler from './route-handler'

export default new Router()
  .use(starterRoutes)

  
  // example routes for cacheable pages
  .get('/', routeHandler)
  .get('/insights', routeHandler)
  .get('/post/:path*', routeHandler)
  
  // example route for cacheable assets
  // .match('/images/:path*', ({ cache, proxy }) => {
  //  cache(CACHE_ASSETS)
  //  return proxy('origin')
  // })

  // useful configs for generated outputs 
  .get('/service-worker.js', ({ cache, serviceWorker }) => {
    cache(CACHE_ASSETS)
    serviceWorker('dist/service-worker.js')
  })
  .match('/main.js', ({ serveStatic, cache }) => {
    cache(CACHE_ASSETS)
    return serveStatic('dist/browser.js')
  })

  // fallback route for all other requests:
  .fallback(({ proxy }) => {
    proxy('origin')
  })

  //////////////////////////////////////////////////////////
  ////////// Static Prerendering examples //////////////////
  //////////////////////////////////////////////////////////
  //
  // More details at:
  // https://docs.layer0.co/guides/static_prerendering
  // 
  // append this to the router call above before .fallback to enable
  // .prerender([
  //   // HTML pages
  //   { path: '/' },
  //   { path: '/categories/mens' },
  //
  //   // API responses
  //   { path: '/api/index.json' },
  //   { path: '/api/categories/mens.json' },
  // ])
