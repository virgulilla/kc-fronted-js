import { newAdController } from "./new-ad/newAdController.js"
import { initSearch } from "./search-ads/searchAdsController.js"
import { notificationsController } from "./notifications/notificationsController.js"

document.addEventListener('DOMContentLoaded', () => {    
  const form = document.querySelector('#new-ad-form')
  const notifications = document.querySelector('.notifications')

  initSearch()
  const { showNotification } = notificationsController(notifications)
  
  form.addEventListener('new-ad-error', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    newAdController(form)
  })

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})