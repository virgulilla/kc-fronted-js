import { deletetAd } from './deleteAdModel.js'

export async function deleteAdController(adId, dispatchTarget) {
  try {
    const event = new CustomEvent('delete-ad-started', {bubbles: true})
    dispatchTarget.dispatchEvent(event)
    await deletetAd(adId)
    const deleteEvent = new CustomEvent('delete-ad-success', {
      bubbles: true,
      detail: {
        type: 'success',
        message: 'Anuncio eliminado correctamente'
      }
    })
    dispatchTarget.dispatchEvent(deleteEvent)
    setTimeout(() => {
      window.location.href= '/'      
    }, 3000)
    
  } catch (error) {
    const event = new CustomEvent('delete-ad-error', {
      bubbles: true,
      detail: {
        type: 'error',
        message: error.message
      }
    })
    dispatchTarget.dispatchEvent(event) 
  } finally {
    const event = new CustomEvent('delete-ad-finished', {bubbles: true})
    dispatchTarget.dispatchEvent(event)
  }
}