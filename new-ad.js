import { newAdController } from "./new-ad/newAdController.js"
import { searchController } from "./search/searchAdsController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { loaderController } from "./loader/loaderController.js"
import { menuController } from "./menu/menuController.js"

document.addEventListener('DOMContentLoaded', () => {    
  const token = !!localStorage.getItem('token')
  if (!token) {
    window.location = '/login.html'
  }

  const form = document.querySelector('#new-ad-form')
  const notifications = document.querySelector('.notifications')
  const { showNotification } = notificationsController(notifications)
  const {loader} = loaderController()
  const search = document.querySelector('#search')
  const header = document.querySelector('header')
  
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

  menuController(header)
  searchController(search)
  newAdController(form)

})