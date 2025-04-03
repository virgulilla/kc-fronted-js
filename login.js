import { loginController } from "./login/loginController.js"
import { initSearch } from "./search-ads/searchAdsController.js"

document.addEventListener('DOMContentLoaded', () => {    
  const form = document.querySelector('#login-form')
  loginController(false)
  initSearch()

  form.addEventListener('submit', async (e) => {
      e.preventDefault()
      loginController(form)
  })

  const mobileMenuButton = document.querySelector('#mobile-menu-button')  
  mobileMenuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  })

})