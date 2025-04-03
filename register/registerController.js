import { doRegister } from "./registerModel.js"
import { isLogged } from "../check-auth/checkAuthController.js"
import { buildMessageError } from "./registerView.js"

const registerMessageElemeent = document.querySelector('#register-message')

export async function registerController(form) {
    try {
        if (isLogged()) {
            window.location.href = '/'    
        }
        if (!form) {
            return
        }
        const formData = new FormData(form)
        await doRegister(formData.get('username'), formData.get('password'))        
        sessionStorage.setItem('successMessage', 'Usuario registrado correctamente. Por favor, inicia sesion')
        window.location.href= '/'
    } catch (error) {
        buildMessageError(registerMessageElemeent, error.message)
    }    
}