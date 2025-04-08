import { editAd } from './editAdModel.js'
import { getToken, getUser } from "../check-auth/checkAuthModel.js"
import { getAd } from '../show-ad/showAdModel.js'

export function editAdController(form, adId, isEdit) {
  const formData = new FormData(form)
  if (isEdit) {
    updateAd(form, formData, adId)
  } else {    
    editFormController(form, adId)
  }      
}

async function updateAd(form, formData, adId) {
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
    const event = new CustomEvent('edit-ad-error', {
      bubbles: true,
      detail: {
        type: 'error',
        message: error.message
      }
    })
    form.dispatchEvent(event) 
  }
}

async function editFormController(form, adId) {
  try {
    const ad = await getAd(adId)
    document.querySelector('#name').value = ad.name
    document.querySelector('#description').value = ad.description
    document.querySelector('#price').value = ad.price
    document.querySelector('#photo').value = ad.photo || ''
    const typeSelect = document.querySelector('#type')
    Array.from(typeSelect.options).forEach(option => {
        option.selected = option.value === ad.type
    })
  } catch (error) {
    const event = new CustomEvent('edit-ad-error', {
      bubbles: true,
      detail: {
        type: 'error',
        message: error.message
      }
    })
    form.dispatchEvent(event) 
  }
}