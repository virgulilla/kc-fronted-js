import { getAd } from './showAdModel.js'
import { buildAdCard, buildNoAdAdvice, showLoading, flashErrorMessage } from './showAdView.js'

const adContainer = document.getElementById('ad-card')

export async function showAdController() {
  try {    
    showLoading(adContainer)
    
    const adId = window.location.hash.substring(1)
    const ad = await getAd(adId)
    adContainer.innerHTML = ''    
    if (ad) {
      drawAd(ad, adContainer)      
    } else {
      adContainer.innerHTML = buildNoAdAdvice()
    }
    
  } catch (error) {
    flashErrorMessage(adContainer)
  }
}

function drawAd(ad, adContainer) {  
  const adElement = document.createElement('div')  
  adElement.innerHTML = buildAdCard(adElement, ad)
  adContainer.appendChild(adElement)
}