import { showAdController } from "./show-ad/showAdController.js"
import { logoutOptionController } from "./check-auth/checkAuthController.js"
import { initSearch } from "./search-ads/searchAdsController.js"
import { loaderController } from "./loader/loaderController.js"

document.addEventListener('DOMContentLoaded', () => {
  const adContainer = document.getElementById('ad-card')
  const {toggle} = loaderController()  
      
  adContainer.addEventListener('load-ads-started', () => {
    toggle()
  })

  adContainer.addEventListener('load-ads-finished', () => {
    toggle()
  })

  logoutOptionController()
  showAdController(adContainer)
  initSearch()

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})