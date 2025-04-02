import { showAdsController } from "./show-ads/showAdsController.js"
import { logoutOptionController } from "./check-auth/checkAuthController.js"
import { deleteAdController } from "./delete-ad/deleteAdController.js"

document.addEventListener('DOMContentLoaded', () => {  
  logoutOptionController()
  showAdsController()

  document.addEventListener('click', (event) => {
    if (event.target.matches('.delete-ad')) {
      const confirmed = confirm('¿Estás seguro de que deseas eliminar este elemento?')
      
      if (!confirmed) return

      const adId = event.target.dataset.id
      deleteAdController(adId)
    }
  });


})