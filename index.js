import { showAdsController } from "./show-ads/showAdsController.js"
import { logoutOptionController } from "./check-auth/checkAuthController.js"

document.addEventListener('DOMContentLoaded', () => {  
  logoutOptionController()
  showAdsController()
})