import { skipWaiting, clientsClaim } from 'workbox-core'
import { Prefetcher, prefetch } from '@edgio/prefetch/sw'
import DeepFetchPlugin, { DeepFetchCallbackParam } from '@edgio/prefetch/sw/DeepFetchPlugin'

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
        callback: deepFetchImages,
      },
    ]),
  ],
})
  .route()
  // Specific domain caching based on a regex match
  .cache(/^https:\/\/assets-global\.website-files\.com\/.*/)

// Callback function image selector
// Customize as needed
function deepFetchImages({ $el }: DeepFetchCallbackParam) {
  const urlTemplate = $el.attr('src')
  prefetch(urlTemplate, 'image')
}
