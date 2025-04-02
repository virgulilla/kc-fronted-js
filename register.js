import { registerController } from "./register/registerController.js"

document.addEventListener('DOMContentLoaded', () => {    
  const form = document.querySelector('#register-form')
  registerController(false)
  form.addEventListener('submit', async (e) => {
      e.preventDefault()
      registerController(form)
  })  
})