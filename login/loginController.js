import { doLogin } from "./loginModel.js"
import { isLogged } from "../check-auth/checkAuthController.js"
import { buildMessageError } from "./loginView.js"

export async function loginController(form) {
    try {
        if (isLogged()) {
            window.location.href = '/'    
        }
        if (!form) {
            return
        }
        const formData = new FormData(form)
        const { accessToken } = await doLogin(formData.get('username'), formData.get('password'))
        sessionStorage.setItem('accessToken', accessToken)
        window.location.href = '/'
    } catch (error) {
        const loginMessageElemeent = document.querySelector('#login-message')
        buildMessageError(loginMessageElemeent, error.message)
    }    
}