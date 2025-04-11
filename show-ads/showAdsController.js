import { getAds } from './showAdsModel.js'
import { buildAd, buildNoAdsAdvice, updatePagination } from './showAdsView.js'

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
      document.addEventListener('click', (event) => {

        if (event.target.matches('#prev-page')) {
          changePage(-1)
        }
    
        if (event.target.matches('#next-page')) {
          changePage(1)
        }
      })        
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
    for (const ad of ads) {
      const adElement = document.createElement('div')    
      adElement.innerHTML = buildAd(adElement, ad)
      adsContainer.appendChild(adElement)
    }
  
    updatePagination(page, totalPages)
  }

  
  const changePage = (num) => {
    const params = new URLSearchParams(window.location.search)
    const currentPage = parseInt(params.get('page')) || 1
    const newPage = Math.max(1, currentPage + num)

    params.set('page', newPage);
    window.location.search = params.toString()
  }
  
}