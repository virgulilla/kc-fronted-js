import { showAdsController } from "./show-ads/showAdsController.js"
import { logoutOptionController } from "./check-auth/checkAuthController.js"
import { deleteAdController } from "./delete-ad/deleteAdController.js"
import { initSearch } from "./search-ads/searchAdsController.js"
import { loaderController } from "./loader/loaderController.js"

document.addEventListener('DOMContentLoaded', () => {  
  const adsContainer = document.getElementById('ads-list')
  const {toggle} = loaderController()  
    
  adsContainer.addEventListener('load-ads-started', () => {
    toggle()
  })

  adsContainer.addEventListener('load-ads-finished', () => {
    toggle()
  })
  
  logoutOptionController()  
  showAdsController(adsContainer)
  initSearch()    

  document.addEventListener('click', (event) => {
    if (event.target.matches('.delete-ad')) {
      const confirmed = confirm('¿Estás seguro de que deseas eliminar este elemento?')
      
      if (!confirmed) return

      const adId = event.target.dataset.id
      deleteAdController(adId)
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