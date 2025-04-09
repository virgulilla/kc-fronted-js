import { loginController } from "./login/loginController.js"
import { initSearch } from "./search-ads/searchAdsController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { loaderController } from "./loader/loaderController.js"

document.addEventListener('DOMContentLoaded', () => {    
  const form = document.querySelector('#login-form')
  const notifications = document.querySelector('.notifications')
  const { showNotification } = notificationsController(notifications)
   const {loader} = loaderController()  

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

  initSearch()
  loginController(form)
 

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})