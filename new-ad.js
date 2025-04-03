import { newAdController } from "./new-ad/newAdController.js"

document.addEventListener('DOMContentLoaded', () => {    
  const form = document.querySelector('#new-ad-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    newAdController(form)
  })
  
})