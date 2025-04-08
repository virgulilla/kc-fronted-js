import { registerController } from "./register/registerController.js"
import { initSearch } from "./search-ads/searchAdsController.js"
import { loaderController } from "./loader/loaderController.js"
import { notificationsController } from "./notifications/notificationsController.js"

document.addEventListener('DOMContentLoaded', () => {    
  const form = document.querySelector('#register-form')
  const notifications = document.querySelector('.notifications')
  const { showNotification } = notificationsController(notifications)
  const {toggle} = loaderController()  

  form.addEventListener('register-error', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })

  form.addEventListener('register-success', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })
  
  form.addEventListener('load-register-started', () => {
    toggle()
  })

  form.addEventListener('load-register-finished', () => {
    toggle()
  })

  initSearch()
  registerController(form)

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})