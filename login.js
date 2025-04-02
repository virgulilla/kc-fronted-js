import { loginController } from "./login/loginController.js"

document.addEventListener('DOMContentLoaded', () => {    
  const form = document.querySelector('#login-form')
  loginController(false)
  form.addEventListener('submit', async (e) => {
      e.preventDefault()
      loginController(form)
  })  
})