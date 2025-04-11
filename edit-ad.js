import { editAdController } from "./edit-ad/editAdController.js"
import { searchController } from "./search/searchAdsController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { loaderController } from "./loader/loaderController.js"
import { menuController } from "./menu/menuController.js"

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#edit-ad-form')  
  const notifications = document.querySelector('.notifications')
  const { showNotification } = notificationsController(notifications) 
  const token = !!localStorage.getItem('token')
  const { loader } = loaderController()
  const search = document.querySelector('#search')
  const header = document.querySelector('header')
  
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
  
  menuController(header)
  searchController(search) 
  editAdController(form)

})