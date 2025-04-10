import { registerController } from "./register/registerController.js"
import { initSearch } from "./search-ads/searchAdsController.js"
import { loaderController } from "./loader/loaderController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { menuDesktopController } from "./menu/menDesktopuController.js"
import { menuMobileController } from "./menu/menuMobileController.js"
import { logoutController } from "./logout/logoutController.js"

document.addEventListener('DOMContentLoaded', () => {    
  const form = document.querySelector('#register-form')
  const notifications = document.querySelector('.notifications')
  const { showNotification } = notificationsController(notifications)
  const {loader} = loaderController()
  const navDesktop = document.querySelector('#nav-desktop')
  const navMobile = document.querySelector('#nav-mobile')  

  form.addEventListener('register-error', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })

  form.addEventListener('register-success', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })
  
  form.addEventListener('load-register-started', () => {
    loader()
  })

  form.addEventListener('load-register-finished', () => {
    loader()
  })

  menuDesktopController(navDesktop)  
  menuMobileController(navMobile)
  initSearch()
  registerController(form)

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