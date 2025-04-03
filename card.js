import { showAdController } from "./show-ad/showAdController.js"
import { logoutOptionController } from "./check-auth/checkAuthController.js"
import { initSearch } from "./search-ads/searchAdsController.js"

document.addEventListener('DOMContentLoaded', () => {  
  logoutOptionController()
  showAdController()
  initSearch()

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})