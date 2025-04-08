import { showAdController } from "./show-ad/showAdController.js"
import { logoutOptionController } from "./check-auth/checkAuthController.js"
import { initSearch } from "./search-ads/searchAdsController.js"
import { loaderController } from "./loader/loaderController.js"
import { notificationsController } from "./notifications/notificationsController.js"

document.addEventListener('DOMContentLoaded', () => {
  const adContainer = document.getElementById('ad-card')
  const notifications = document.querySelector('.notifications')
  const {toggle} = loaderController()
  const { showNotification } = notificationsController(notifications)  
      
  adContainer.addEventListener('load-ad-started', () => {
    toggle()
  })

  adContainer.addEventListener('load-ad-finished', () => {
    toggle()
  })

  adContainer.addEventListener('load-ad-error', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })

  logoutOptionController()
  showAdController(adContainer)
  notificationsController(notifications)
  initSearch()

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})