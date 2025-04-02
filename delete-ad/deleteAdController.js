import { deletetAd } from './deleteAdModel.js'
import { getToken } from "../check-auth/checkAuthModel.js"
import { buildMessageSuccess, buildMessageError } from "./deleteView.js"

const deleteMessageElemeent = document.querySelector('#delete-message')

export async function deleteAdController(adId) {
  try {      
    const token = getToken()
    await deletetAd(adId, token)
    window.location.href= '/'    
    buildMessageSuccess(deleteMessageElemeent)
  } catch (error) {
    buildMessageError(deleteMessageElemeent, error.message)
  }
}