import { showAdController } from "./show-ad/showAdController.js"
import { menuController } from "./menu/menuController.js"
import { searchController } from "./search/searchAdsController.js"
import { loaderController } from "./loader/loaderController.js"
import { notificationsController } from "./notifications/notificationsController.js"

document.addEventListener('DOMContentLoaded', () => {
  const adContainer = document.getElementById('ad-card')
  const notifications = document.querySelector('.notifications')
  const header = document.querySelector('header')
  const {loader} = loaderController()
  const { showNotification } = notificationsController(notifications)
  const search = document.querySelector('#search')
  const params = new URLSearchParams(window.location.search)
  const adId = Number(params.get('id'))
  
      
  adContainer.addEventListener('load-ad-started', () => {
    loader()
  })

  adContainer.addEventListener('load-ad-finished', () => {
    loader()
  })

  adContainer.addEventListener('load-ad-error', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })

  adContainer.addEventListener('delete-ad-error', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })

  adContainer.addEventListener('delete-ad-success', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })

  adContainer.addEventListener('delete-ad-started', () => {
    loader()
  })

  adContainer.addEventListener('delete-ad-finished', () => {
    loader()
  })


  menuController(header)
  if (adId) {
    showAdController(adContainer, adId)    
  } else {
    window.location = '/'
  }
  
  notificationsController(notifications)
  searchController(search)

})