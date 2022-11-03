import { CACHE_ASSETS } from './cache'
import routeHandler from './route-handler'
import { Router } from '@edgio/core/router'
import { starterRoutes } from '@edgio/starter'

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
