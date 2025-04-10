import { getAd } from './showAdModel.js'
import { buildAdCard } from './showAdView.js'
import { getUser } from '../utils/decodeToken.js'

export async function showAdController(adContainer) {
  try {        
    const event = new CustomEvent('load-ad-started')
    adContainer.dispatchEvent(event)
    const user = getUser()   
    const params = new URLSearchParams(window.location.search)
    const adId = Number(params.get('id'))
    const ad = await getAd(adId)

    drawAd(ad, adContainer, user)
    
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
}

function drawAd(ad, adContainer, user) {  
  const adElement = document.createElement('div')  
  adElement.innerHTML = buildAdCard(adElement, ad, user)
  adContainer.appendChild(adElement)
}