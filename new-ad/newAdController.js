import { newAd } from './newAdModel.js'
import { REGEXP } from "../utils/constants.js"

export async function newAdController(form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const errors = validateNewAdForm(formData)
    if (errors.length === 0) {
      handleNewAd(formData)
    } else {
        for (const error of errors) {
            const newAdevent = new CustomEvent('new-ad-error', {
                detail: {
                    type: 'error',
                    message: error
                }
            })
            form.dispatchEvent(newAdevent) 
        }
    }    
  })

  const handleNewAd = async (formData) => {
    try{
      const eventNewAd = new CustomEvent('new-ad-started')
      form.dispatchEvent(eventNewAd)      
      const data = {
        name: formData.get('name'),
        description: formData.get('description'),
        price: formData.get('price'),
        type: formData.get('type'),
        photo: formData.get('photo')
      }
      await newAd(data)
      const event = new CustomEvent('new-ad-success', {
        detail: {
            type: 'success',
            message: 'Anuncio creado correctamente'
        }
      })
      form.dispatchEvent(event)
      setTimeout(() => {
        window.location = '/'
      }, 5000)
    } catch (error) {
      const event = new CustomEvent('new-ad-error', {
        detail: {
          type: 'error',
          message: error.message
        }
      })
      form.dispatchEvent(event) 
    } finally {
      const eventNewAd = new CustomEvent('new-ad-finished')
      form.dispatchEvent(eventNewAd)
    }
  }

  const validateNewAdForm = (formData) => {
      const errors = []
      const photo = formData.get('photo')
      
      if (!REGEXP.photo.test(photo)) {
          errors.push('El formato de la url es incorrecto')
      }
      
      return errors
  }
}