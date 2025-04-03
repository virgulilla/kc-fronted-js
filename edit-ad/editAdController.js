import { editAd } from './editAdModel.js'
import { getToken, getUser } from "../check-auth/checkAuthModel.js"
import { buildMessageError, buildAd } from "./editAdView.js"
import { getAd } from '../show-ad/showAdModel.js'

const newMessageElemeent = document.querySelector('#edit-message')

export function editAdController(form, adId, isEdit) {
  const formData = new FormData(form)
  if (isEdit) {
    updateAd(formData, adId)
  } else {    
    editFormController(adId)
  }      
}

async function updateAd(formData, adId) {
  try {
    const token = getToken()
    const user = await getUser()    
    const data = {
      userId: user.id,
      name: formData.get('name'),
      description: formData.get('description'),
      price: formData.get('price'),
      type: formData.get('type'),
      photo: formData.get('photo'),
    }
    
    await editAd(token, adId, data)
    sessionStorage.setItem('successMessage', 'Anuncio editado correctamente')
    window.location.href= `/card.html?id=${adId}`    
  } catch (error) {
    buildMessageError(newMessageElemeent, error.message)
  }
}

async function editFormController(adId) {
  try {
    const ad = await getAd(adId)
    buildAd(ad)
  } catch (error) {
    buildMessageError(newMessageElemeent, error.message)
  }
}