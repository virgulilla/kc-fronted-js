import { showAdsController } from "./show-ads/showAdsController.js"
import { logoutOptionController } from "./check-auth/checkAuthController.js"
import { deleteAdController } from "./delete-ad/deleteAdController.js"
import { initSearch } from "./search-ads/searchAdsController.js"
import { loaderController } from "./loader/loaderController.js"
import { notificationsController } from "./notifications/notificationsController.js"

document.addEventListener('DOMContentLoaded', () => {  
  const adsContainer = document.getElementById('ads-list')
  const notifications = document.querySelector('.notifications')
  const {toggle} = loaderController()  
  const { showNotification } = notificationsController(notifications)
    
  adsContainer.addEventListener('load-ads-started', () => {
    toggle()
  })

  adsContainer.addEventListener('load-ads-finished', () => {
    toggle()
  })

  adsContainer.addEventListener('load-ads-error', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })

  adsContainer.addEventListener('delete-ad-error', (event) => {
    const { type, message } = event.detail
    notificationsController(type, message)
  })

  logoutOptionController()  
  showAdsController(adsContainer)
  notificationsController(notifications)
  initSearch()    

  document.addEventListener('click', (event) => {
    if (event.target.matches('.delete-ad')) {
      const confirmed = confirm('¿Estás seguro de que deseas eliminar este elemento?')
      
      if (!confirmed) return

      const adId = event.target.dataset.id
      deleteAdController(adId, event.target)
    }

    if (event.target.matches('#prev-page')) {
      changePage(-1)
    }

    if (event.target.matches('#next-page')) {
      changePage(1)
    }

    if (event.target.closest('#mobile-menu-button')) {      
      const mobileMenu = document.querySelector('#mobile-menu');
      mobileMenu.classList.toggle('hidden');
    }

  })
})

function changePage(num) {
  const params = new URLSearchParams(window.location.search)
  const currentPage = parseInt(params.get('page')) || 1
  const newPage = Math.max(1, currentPage + num)

  params.set('page', newPage);
  window.location.search = params.toString()
}