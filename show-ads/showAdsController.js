import { getAds } from './showAdsModel.js'
import { buildAd, buildNoAdsAdvice } from './showAdsView.js'

export async function showAdsController() {
  try {
    const adsContainer = document.getElementById('ads-list')
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

function drawAds(ads, adsContainer) {  
  for (const ad of ads) {
    const adElement = document.createElement('div')
    adElement.className = 'bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow'
    adElement.innerHTML = buildAd(ad)
    adsContainer.appendChild(adElement)
  }
}