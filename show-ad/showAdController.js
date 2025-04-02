import { getAd } from './showAdModel.js'
import { buildAdCard, buildNoAdAdvice } from './showAdView.js'

const adContainer = document.getElementById('ad-card')

export async function showAdController() {
  try {    
    adContainer.innerHTML = '<p class="text-gray-500 text-center col-span-full">Cargando anuncio...</p>'
    
    const adId = window.location.hash.substring(1)
    const ad = await getAd(adId)
    adContainer.innerHTML = ''    
    if (ad) {
      drawAd(ad, adContainer)      
    } else {
      adContainer.innerHTML = buildNoAdAdvice()
    }
    
  } catch (error) {
    adContainer.innerHTML = '<p class="text-red-500 text-center col-span-full">Error al cargar el anuncio.</p>'
  }
}

function drawAd(ad, adContainer) {  
  const adElement = document.createElement('div')  
  adElement.innerHTML = buildAdCard(adElement, ad)
  adContainer.appendChild(adElement)
}