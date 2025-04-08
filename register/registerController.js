import { doRegister } from "./registerModel.js"
import { isLogged } from "../check-auth/checkAuthController.js"

export async function registerController(form) {
    if (isLogged()) {
        window.location.href = '/'    
    }
    
    form.addEventListener('submit', async (event) => {        
        try {
            event.preventDefault()
            const customRegisterEvent = new CustomEvent('register-started')
            form.dispatchEvent(customRegisterEvent)
            const formData = new FormData(form)
            await doRegister(formData.get('username'), formData.get('password'))        
            sessionStorage.setItem('successMessage', 'Usuario registrado correctamente. Por favor, inicia sesion')
            window.location.href= '/'
        } catch (error) {
            const customEvent = new CustomEvent('register-error', {
                detail: {
                  type: 'error',
                  message: error.message
                }
              })
              form.dispatchEvent(customEvent) 
        } finally {
            const customRegisterEvent = new CustomEvent('register-finished')
            form.dispatchEvent(customRegisterEvent)
        }  
    })

      
}