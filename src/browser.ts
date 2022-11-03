import install from '@edgio/prefetch/window/install'
import installDevtools from '@edgio/devtools/install'

document.addEventListener('DOMContentLoaded', function () {
  installDevtools()
  install()
})
