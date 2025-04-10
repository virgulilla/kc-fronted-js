import { newAdController } from "./new-ad/newAdController.js"
import { searchController } from "./search/searchAdsController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { loaderController } from "./loader/loaderController.js"
import { menuDesktopController } from "./menu/menDesktopuController.js"
import { menuMobileController } from "./menu/menuMobileController.js"

document.addEventListener('DOMContentLoaded', () => {    
  const token = !!localStorage.getItem('token')
  if (!token) {
    window.location = '/login.html'
  }

  const form = document.querySelector('#new-ad-form')
  const notifications = document.querySelector('.notifications')
  const { showNotification } = notificationsController(notifications)
  const {loader} = loaderController()
  const navDesktop = document.querySelector('#nav-desktop')
  const navMobile = document.querySelector('#nav-mobile')
  const search = document.querySelector('#search')
  
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

  menuDesktopController(navDesktop)  
  menuMobileController(navMobile)
  searchController(search)
  newAdController(form)

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})