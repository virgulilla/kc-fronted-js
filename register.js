import { registerController } from "./register/registerController.js"
import { initSearch } from "./search-ads/searchAdsController.js"

document.addEventListener('DOMContentLoaded', () => {    
  initSearch()
  
  const form = document.querySelector('#register-form')
  registerController(false)
  form.addEventListener('submit', async (e) => {
      e.preventDefault()
      registerController(form)
  })

})