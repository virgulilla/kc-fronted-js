import { getAd } from './showAdModel.js'
import { buildAdCard, buildNoAdAdvice, flashErrorMessage, flashSuccessMessage } from './showAdView.js'
import { getUser } from '../check-auth/checkAuthModel.js'

const flashMessageElement = document.querySelector('#flash-message')

export async function showAdController(adContainer) {
  try {
    flashSuccessMessage(flashMessageElement)        
    const event = new CustomEvent('load-ads-started')
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
    flashErrorMessage(adContainer)
  } finally {
    const event = new CustomEvent('load-ads-finished')
    adContainer.dispatchEvent(event)
  }
}

function drawAd(ad, adContainer, user) {  
  const adElement = document.createElement('div')  
  adElement.innerHTML = buildAdCard(adElement, ad, user)
  adContainer.appendChild(adElement)
}