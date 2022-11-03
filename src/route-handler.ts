import { CACHE_PAGES } from './cache'
import { injectBrowserScript } from '@edgio/starter'
import { RouteHandler } from '@edgio/core/router/Router'

const handler: RouteHandler = async ({ cache, removeUpstreamResponseHeader, proxy, updateResponseHeader }) => {
  cache(CACHE_PAGES)
  // The presence of a set-cookie header would prevent the response from being cached, so ensure set-cookie headers are removed.
  removeUpstreamResponseHeader('set-cookie') 
  // inject browser.ts into the document returned from the origin
  proxy('origin', { transformResponse: injectBrowserScript })
  // convert absolute redirects to origin to relative
  // so that the user isn't transferred to the origin.
  updateResponseHeader('location', /https:\/\/edg\.io\//gi, '/')
}

export default handler
