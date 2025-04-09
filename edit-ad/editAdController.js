import { editAd } from './editAdModel.js'
import { getAd } from '../show-ad/showAdModel.js'
import { decodeToken } from '../utils/decodeToken.js'

export async function editAdController(form) {
  try {
    const event = new CustomEvent('edit-ad-started')
    form.dispatchEvent(event)
    const params = new URLSearchParams(window.location.search)  
    const adId = Number(params.get('id'))
    const ad = await getAd(adId)
    const user = decodeToken()

    if (!user || ad.userId !== user.userId) {
      throw new Error('No tienes permiso para editar este anuncio')
    }

    writeFormValues(ad)

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const formData = new FormData(form)
      updateAd(form, formData, adId)    
    })

  } catch (error) {
    const event = new CustomEvent('edit-ad-error', {
      detail: {
        type: 'error',
        message: error.message
      }
    })
    form.dispatchEvent(event) 
  } finally {
    const event = new CustomEvent('edit-ad-finished')
    form.dispatchEvent(event)
  }

  async function writeFormValues(ad) {
    document.querySelector('#name').value = ad.name
    document.querySelector('#description').value = ad.description
    document.querySelector('#price').value = ad.price
    document.querySelector('#photo').value = ad.photo || ''
    const typeSelect = document.querySelector('#type')
    Array.from(typeSelect.options).forEach(option => {
        option.selected = option.value === ad.type
    })
  }

  async function updateAd(form, formData, adId) {
    try {   
      const data = {
        name: formData.get('name'),
        description: formData.get('description'),
        price: formData.get('price'),
        type: formData.get('type'),
        photo: formData.get('photo'),
      }
      
      await editAd(adId, data)
      const event = new CustomEvent('edit-ad-success', {
        detail: {
          type: 'success',
          message: 'Anuncio editado correctamente'
        }
      })
      form.dispatchEvent(event)
      setTimeout(() => {
        window.location.href= `/card.html?id=${adId}`    
      }, 3000)
      
    } catch (error) {
      const event = new CustomEvent('edit-ad-error', {
        detail: {
          type: 'error',
          message: error.message
        }
      })
      form.dispatchEvent(event) 
    }
  }
  
}