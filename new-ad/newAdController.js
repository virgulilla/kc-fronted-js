import { newAd } from './newAdModel.js'
import { getToken, getUser } from "../check-auth/checkAuthModel.js"
import { buildMessageError } from "./newAdView.js"

const newMessageElemeent = document.querySelector('#new-message')

export async function newAdController(form) {
  try {      
    const token = getToken()
    const user = await getUser()
    const formData = new FormData(form)
    const data = {
      userId: user.id,
      name: formData.get('name'),
      description: formData.get('description'),
      price: formData.get('price'),
      type: formData.get('type'),
      photo: formData.get('photo')
    }
    
    await newAd(token, data)
    sessionStorage.setItem('successMessage', 'Anuncio creado correctamente')
    window.location.href= '/'    
  } catch (error) {
    buildMessageError(newMessageElemeent, error.message)
  }
}