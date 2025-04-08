import { getAd } from './showAdModel.js'
import { buildAdCard, buildNoAdAdvice } from './showAdView.js'
import { getUser } from '../check-auth/checkAuthModel.js'

export async function showAdController(adContainer) {
  try {        
    const event = new CustomEvent('load-ad-started')
    adContainer.dispatchEvent(event)
    const user = await getUser()    
    const params = new URLSearchParams(window.location.search)
    const adId = Number(params.get('id'))
    const ad = await getAd(adId)
    adContainer.innerHTML = ''    
    if (ad) {
      drawAd(ad, adContainer, user)      
    } else {
      adContainer.innerHTML = buildNoAdAdvice()
    }
    
  } catch (error) {    
    const event = new CustomEvent('load-ad-error', {
      detail: {
        type: 'error',
        message: error.message
      }
    })
    adContainer.dispatchEvent(event) 
  } finally {
    const event = new CustomEvent('load-ad-finished')
    adContainer.dispatchEvent(event)
  }
}

function drawAd(ad, adContainer, user) {  
  const adElement = document.createElement('div')  
  adElement.innerHTML = buildAdCard(adElement, ad, user)
  adContainer.appendChild(adElement)
}