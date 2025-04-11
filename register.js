import { registerController } from "./register/registerController.js"
import { searchController } from "./search/searchAdsController.js"
import { loaderController } from "./loader/loaderController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { menuController } from "./menu/menuController.js"

document.addEventListener('DOMContentLoaded', () => {    
  const form = document.querySelector('#register-form')
  const notifications = document.querySelector('.notifications')
  const { showNotification } = notificationsController(notifications)
  const {loader} = loaderController()
  const search = document.querySelector('#search')
  const header = document.querySelector('header')

  form.addEventListener('register-error', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })

  form.addEventListener('register-success', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })
  
  form.addEventListener('load-register-started', () => {
    loader()
  })

  form.addEventListener('load-register-finished', () => {
    loader()
  })

  menuController(header)
  searchController(search)
  registerController(form)

})