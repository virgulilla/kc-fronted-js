import { newAdController } from "./new-ad/newAdController.js"
import { initSearch } from "./search-ads/searchAdsController.js"

document.addEventListener('DOMContentLoaded', () => {    
  initSearch()
  
  const form = document.querySelector('#new-ad-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    newAdController(form)
  })

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})