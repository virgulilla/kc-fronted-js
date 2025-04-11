import { getAd, removeAd } from './showAdModel.js'
import { buildAdCard } from './showAdView.js'
import { getUserByToken } from '../services/userService.js'

export async function showAdController(adContainer, adId) {
  try {        
    const event = new CustomEvent('load-ad-started')
    adContainer.dispatchEvent(event)      
    const user = await getUserByToken()    
    const ad = await getAd(adId)
    const isOwner = user && ad.userId === user.id

    drawAd(ad, adContainer, isOwner)

    if (isOwner) {
      const delButton = document.querySelector('.del-button')
      delButton.addEventListener('click', (event) => {
        event.preventDefault()
        if (confirm('¿Estás seguro de que deseas eliminar este elemento?')) {
          deleteAd(adId)
        }
        
      })
    }
    
  } catch (error) {    
    const event = new CustomEvent('load-ad-error', {
      detail: {
        type: 'error',
        message: error.message
      }
    })
    adContainer.dispatchEvent(event) 
    setTimeout(() => {
      window.location.href = '/'
    }, 3000)
  } finally {
    const event = new CustomEvent('load-ad-finished')
    adContainer.dispatchEvent(event)
  }

  function drawAd(ad, adContainer, user) {  
    const adElement = document.createElement('div')  
    adElement.innerHTML = buildAdCard(adElement, ad, user)
    adContainer.appendChild(adElement)
  }

  async function deleteAd(adId) {
    try {
      const event = new CustomEvent('delete-ad-started')
      adContainer.dispatchEvent(event)
      await removeAd(adId)
      const removedEvent = new CustomEvent('delete-ad-success', {
        detail: {
          type: 'success',
          message: 'Anuncio eliminado correctamente.'
        }
      })
      adContainer.dispatchEvent(removedEvent)
      setTimeout(() => {
        window.location.href = '/'
      }, 3000)
    } catch(error) {
      const event = new CustomEvent('delete-ad-error', {
        detail: {
          type: 'error',
          message: error.message
        }
      })
      adContainer.dispatchEvent(event)    
    } finally {
      const event = new CustomEvent('delete-ad-finished')
      adContainer.dispatchEvent(event)
    }
  }

}