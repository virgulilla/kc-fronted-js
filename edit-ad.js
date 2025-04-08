import { editAdController } from "./edit-ad/editAdController.js"
import { initSearch } from "./search-ads/searchAdsController.js"
import { notificationsController } from "./notifications/notificationsController.js"

document.addEventListener('DOMContentLoaded', () => {    
  initSearch()  
  const form = document.querySelector('#edit-ad-form')
  const params = new URLSearchParams(window.location.search)
  const adId = Number(params.get('id'))
  const notifications = document.querySelector('.notifications')

  const { showNotification } = notificationsController(notifications) 

  form.addEventListener('edit-ad-error', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })
  
  editAdController(form, adId, false)

  form.addEventListener('submit', (event) => {
    event.preventDefault()    
    if (!adId) return

    editAdController(form, adId, true)
  })

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})