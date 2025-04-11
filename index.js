import { showAdsController } from "./show-ads/showAdsController.js"
import { menuController } from "./menu/menuController.js"
import { searchController } from "./search/searchAdsController.js"
import { loaderController } from "./loader/loaderController.js"
import { notificationsController } from "./notifications/notificationsController.js"

document.addEventListener('DOMContentLoaded', () => {  
  const adsContainer = document.getElementById('ads-list')
  const notifications = document.querySelector('.notifications')
  const header = document.querySelector('header')
  const {loader} = loaderController()  
  const { showNotification } = notificationsController(notifications)  
  const search = document.querySelector('#search')
    
  adsContainer.addEventListener('load-ads-started', () => {
    loader()
  })

  adsContainer.addEventListener('load-ads-finished', () => {
    loader()
  })

  adsContainer.addEventListener('load-ads-error', (event) => {
    const { type, message } = event.detail
    showNotification(type, message)
  })
  

  menuController(header)  
  showAdsController(adsContainer)
  notificationsController(notifications)
  searchController(search)
  
})