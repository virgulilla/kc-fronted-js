import { doRegister } from "./registerModel.js"
import { isLogged } from "../check-auth/checkAuthController.js"
import { buildMessageSuccess, buildMessageError } from "./registerView.js"

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
        buildMessageSuccess(registerMessageElemeent)
    } catch (error) {
        buildMessageError(registerMessageElemeent, error.message)
    }    
}