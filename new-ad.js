import { newAdController } from "./new-ad/newAdController.js"
import { initSearch } from "./search-ads/searchAdsController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { loaderController } from "./loader/loaderController.js"

document.addEventListener('DOMContentLoaded', () => {    
  const token = localStorage.getItem('token')
  if (!token) {
    window.location = '/login.html'
  }

  const form = document.querySelector('#new-ad-form')
  const notifications = document.querySelector('.notifications')
  const { showNotification } = notificationsController(notifications)
  const {loader} = loaderController()  
  
  form.addEventListener('new-ad-error', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })

  form.addEventListener('new-ad-success', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })

  form.addEventListener('new-ad-started', () => {
    loader()
  })

  form.addEventListener('new-ad-finished', () => {
    loader()
  })

  initSearch()
  newAdController(form)

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})