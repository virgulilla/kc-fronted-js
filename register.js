import { registerController } from "./register/registerController.js"
import { searchController } from "./search/searchAdsController.js"
import { loaderController } from "./loader/loaderController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { menuDesktopController } from "./menu/menDesktopuController.js"
import { menuMobileController } from "./menu/menuMobileController.js"

document.addEventListener('DOMContentLoaded', () => {    
  const form = document.querySelector('#register-form')
  const notifications = document.querySelector('.notifications')
  const { showNotification } = notificationsController(notifications)
  const {loader} = loaderController()
  const navDesktop = document.querySelector('#nav-desktop')
  const navMobile = document.querySelector('#nav-mobile')
  const search = document.querySelector('#search')

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
  searchController(search)
  registerController(form)

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})