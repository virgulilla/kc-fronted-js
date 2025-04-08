import { deletetAd } from './deleteAdModel.js'
import { getToken } from "../check-auth/checkAuthModel.js"

export async function deleteAdController(adId, dispatchTarget) {
  try {      
    const token = getToken()
    await deletetAd(adId, token)
    window.location.href= '/'    
    sessionStorage.setItem('successMessage', 'Anuncio eliminado correctamente')
  } catch (error) {
    const event = new CustomEvent('delete-ad-error', {
      bubbles: true,
      detail: {
        type: 'error',
        message: error.message
      }
    })
    dispatchTarget.dispatchEvent(event) 
  }
}