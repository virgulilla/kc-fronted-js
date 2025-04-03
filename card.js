import { showAdController } from "./show-ad/showAdController.js"
import { logoutOptionController } from "./check-auth/checkAuthController.js"
import { initSearch } from "./search-ads/searchAdsController.js"

document.addEventListener('DOMContentLoaded', () => {  
  logoutOptionController()
  showAdController()
  initSearch()

})