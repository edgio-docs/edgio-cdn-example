import install from '@layer0/prefetch/window/install'
import installDevtools from '@layer0/devtools/install'

document.addEventListener('DOMContentLoaded', function () {
  installDevtools()
  install()
})
