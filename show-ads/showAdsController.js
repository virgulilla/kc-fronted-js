import { getAds } from './showAdsModel.js'
import { buildAd, buildNoAdsAdvice, updatePagination } from './showAdsView.js'
import { getUser } from '../utils/decodeToken.js'

const LIMIT = 10

export async function showAdsController(adsContainer) {  
  try {        
    const event = new CustomEvent('load-ads-started')
    adsContainer.dispatchEvent(event)
    const params = new URLSearchParams(window.location.search)    
    const page = Number(params.get('page')) || 1
    const limit = Number(params.get('limit')) || LIMIT
    const filters = {
      search: params.get('q'),
      page,
      limit
    }
    
    const {ads, total} = await getAds(filters)
    const totalPages = Math.ceil(total / limit)
    adsContainer.innerHTML = ''

    if (ads.length > 0) {
      drawAds(ads, adsContainer, page, totalPages)      
    } else {
      adsContainer.innerHTML = buildNoAdsAdvice()
    }
    
  } catch (error) {
    const event = new CustomEvent('load-ads-error', {
      detail: {
        type: 'error',
        message: 'Ha habido un error al cargar los anuncios.'
      }
    })
    adsContainer.dispatchEvent(event)     
  } finally {
    const event = new CustomEvent('load-ads-finished')
    adsContainer.dispatchEvent(event)
  }

  async function drawAds(ads, adsContainer, page, totalPages) {    
    const user = getUser()
    
    for (const ad of ads) {
      const showDeleteButton = user && ad.userId === user.userId
      const adElement = document.createElement('div')    
      adElement.innerHTML = buildAd(adElement, ad, showDeleteButton)
      adsContainer.appendChild(adElement)
    }
  
    updatePagination(page, totalPages)
  }
  
}