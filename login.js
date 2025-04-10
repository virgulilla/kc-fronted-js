import { loginController } from "./login/loginController.js"
import { searchController } from "./search/searchAdsController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { loaderController } from "./loader/loaderController.js"
import { menuDesktopController } from "./menu/menDesktopuController.js"
import { menuMobileController } from "./menu/menuMobileController.js"

document.addEventListener('DOMContentLoaded', () => {    
  const form = document.querySelector('#login-form')
  const notifications = document.querySelector('.notifications')
  const { showNotification } = notificationsController(notifications)
  const {loader} = loaderController()
  const navDesktop = document.querySelector('#nav-desktop')
  const navMobile = document.querySelector('#nav-mobile')
  const search = document.querySelector('#search')

  form.addEventListener('login-error', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })

  form.addEventListener('login-success', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })

  form.addEventListener('login-started', () => {
    loader()
  })

  form.addEventListener('login-finished', () => {
    loader()
  })

  menuDesktopController(navDesktop)  
  menuMobileController(navMobile)
  searchController(search)
  loginController(form) 

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})