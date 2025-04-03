import { getAds } from './showAdsModel.js'
import { buildAd, buildNoAdsAdvice, flashSuccessMessage } from './showAdsView.js'
import { getUsserLogged } from '../check-auth/checkAuthController.js'

export async function showAdsController() {
  try {
    const adsContainer = document.getElementById('ads-list')
    const flashMessageElement = document.querySelector('#flash-message')    
    flashSuccessMessage(flashMessageElement)
    adsContainer.innerHTML = '<p class="text-gray-500 text-center col-span-full">Cargando anuncios...</p>'
    
    const ads = await getAds()
    adsContainer.innerHTML = ''

    if (ads.length > 0) {
      drawAds(ads, adsContainer)      
    } else {
      adsContainer.innerHTML = buildNoAdsAdvice()
    }
    
  } catch (error) {
    adsContainer.innerHTML = '<p class="text-red-500 text-center col-span-full">Error al cargar los anuncios.</p>'
  }
}

async function drawAds(ads, adsContainer) {  
  const user = await getUsserLogged() 
  
  for (const ad of ads) {
    const showDeleteButton = user && ad.userId === user.id
    const adElement = document.createElement('div')    
    adElement.innerHTML = buildAd(adElement, ad, showDeleteButton)
    adsContainer.appendChild(adElement)
  }
}