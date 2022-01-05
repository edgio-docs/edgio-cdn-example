import { skipWaiting, clientsClaim } from 'workbox-core'
import { Prefetcher, prefetch } from '@layer0/prefetch/sw'
import DeepFetchPlugin, { DeepFetchCallbackParam } from '@layer0/prefetch/sw/DeepFetchPlugin'

skipWaiting()
clientsClaim()

new Prefetcher({
  plugins: [
    new DeepFetchPlugin([
      {
        selector: 'rounded-image',
        maxMatches: 1,
        attribute: 'src',
        as: 'image',
        callback: deepFetchImages
      },
    ]),
  ],
})
.route()
.cache(/^https:\/\/assets-global\.website-files\.com\/.*/) // Specific domain caching based on a regex match

// Callback function image selector
// Customize as needed
function deepFetchImages({ $el }: DeepFetchCallbackParam) {
  const urlTemplate = $el.attr('src')
  prefetch(url, 'image')
}
