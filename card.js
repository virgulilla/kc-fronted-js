import { showAdController } from "./show-ad/showAdController.js"
import { logoutOptionController } from "./check-auth/checkAuthController.js"

document.addEventListener('DOMContentLoaded', () => {  
  logoutOptionController()
  showAdController()    
})