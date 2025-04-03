import { editAdController } from "./edit-ad/editAdController.js"
import { initSearch } from "./search-ads/searchAdsController.js"

document.addEventListener('DOMContentLoaded', () => {    
  initSearch()  
  const form = document.querySelector('#edit-ad-form')
  const params = new URLSearchParams(window.location.search)
  const adId = Number(params.get('id'))
  
  editAdController(form, adId, false)

  form.addEventListener('submit', (event) => {
    event.preventDefault()    
    if (!adId) return

    editAdController(form, adId, true)
  })

})