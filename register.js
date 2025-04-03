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

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})