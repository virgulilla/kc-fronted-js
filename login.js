import { loginController } from "./login/loginController.js"
import { searchController } from "./search/searchAdsController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { loaderController } from "./loader/loaderController.js"
import { menuController } from "./menu/menuController.js"

document.addEventListener('DOMContentLoaded', () => {    
  const form = document.querySelector('#login-form')
  const notifications = document.querySelector('.notifications')
  const { showNotification } = notificationsController(notifications)
  const {loader} = loaderController()
  const search = document.querySelector('#search')
  const header = document.querySelector('header')

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

  menuController(header)
  searchController(search)
  loginController(form) 

})