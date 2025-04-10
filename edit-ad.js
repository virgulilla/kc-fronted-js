import { editAdController } from "./edit-ad/editAdController.js"
import { searchController } from "./search/searchAdsController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { loaderController } from "./loader/loaderController.js"
import { menuDesktopController } from "./menu/menDesktopuController.js"
import { menuMobileController } from "./menu/menuMobileController.js"
import { logoutController } from "./logout/logoutController.js"

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#edit-ad-form')  
  const notifications = document.querySelector('.notifications')
  const { showNotification } = notificationsController(notifications) 
  const token = localStorage.getItem('token')
  const { loader } = loaderController()
  const navDesktop = document.querySelector('#nav-desktop')
  const navMobile = document.querySelector('#nav-mobile')
  const search = document.querySelector('#search')
  
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
  
  menuDesktopController(navDesktop)  
  menuMobileController(navMobile)
  searchController(search) 
  editAdController(form)

  const logout = document.querySelector('#logout')
  if (logout) {
    logoutController(logout)
  }

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})