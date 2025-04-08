import { editAdController } from "./edit-ad/editAdController.js"
import { initSearch } from "./search-ads/searchAdsController.js"
import { notificationsController } from "./notifications/notificationsController.js"

document.addEventListener('DOMContentLoaded', () => {    
  initSearch()  
  const form = document.querySelector('#edit-ad-form')  
  const notifications = document.querySelector('.notifications')

  const { showNotification } = notificationsController(notifications) 

  form.addEventListener('edit-ad-error', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })
  
  editAdController(form)

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})