import { editAdController } from "./edit-ad/editAdController.js"
import { initSearch } from "./search-ads/searchAdsController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { loaderController } from "./loader/loaderController.js"

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#edit-ad-form')  
  const notifications = document.querySelector('.notifications')
  const { showNotification } = notificationsController(notifications) 
  const token = localStorage.getItem('token')
  const { loader } = loaderController()
  
  if (!token) {
    window.location = '/login.html'
  }
  
  form.addEventListener('edit-ad-started', () => {
    loader()
  })

  form.addEventListener('edit-ad-finished', () => {
    loader()
  })
  
  form.addEventListener('edit-ad-error', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })
 
  form.addEventListener('edit-ad-success', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })  
  
  initSearch() 
  editAdController(form)

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})