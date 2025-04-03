import { deletetAd } from './deleteAdModel.js'
import { getToken } from "../check-auth/checkAuthModel.js"
import { buildMessageError } from "./deleteView.js"

const deleteMessageElemeent = document.querySelector('#delete-message')

export async function deleteAdController(adId) {
  try {      
    const token = getToken()
    await deletetAd(adId, token)
    window.location.href= '/'    
    sessionStorage.setItem('successMessage', 'Anuncio eliminado correctamente')
  } catch (error) {
    buildMessageError(deleteMessageElemeent, error.message)
  }
}