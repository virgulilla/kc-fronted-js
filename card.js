import { showAdController } from "./show-ad/showAdController.js"
import { menuDesktopController } from "./menu/menDesktopuController.js"
import { menuMobileController } from "./menu/menuMobileController.js"
import { initSearch } from "./search-ads/searchAdsController.js"
import { loaderController } from "./loader/loaderController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { logoutController } from "./logout/logoutController.js"

document.addEventListener('DOMContentLoaded', () => {
  const adContainer = document.getElementById('ad-card')
  const notifications = document.querySelector('.notifications')
  const navDesktop = document.querySelector('#nav-desktop')
  const navMobile = document.querySelector('#nav-mobile')
  const {loader} = loaderController()
  const { showNotification } = notificationsController(notifications)  
      
  adContainer.addEventListener('load-ad-started', () => {
    loader()
  })

  adContainer.addEventListener('load-ad-finished', () => {
    loader()
  })

  adContainer.addEventListener('load-ad-error', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })

  menuDesktopController(navDesktop)  
  menuMobileController(navMobile)
  menuDesktopController(navDesktop)
  showAdController(adContainer)
  notificationsController(notifications)
  initSearch()

  const logout = document.querySelector('#logout')
  if (logout) {
    logoutController(logout)
  }

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})