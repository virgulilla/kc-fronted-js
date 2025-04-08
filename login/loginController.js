import { doLogin } from "./loginModel.js"
import { isLogged } from "../check-auth/checkAuthController.js"

export async function loginController(form) {

    form.addEventListener('submit', async (event) => {
        try {
            event.preventDefault()
            if (isLogged()) {
                window.location.href = '/'    
            }
    
            const loginEvent = new CustomEvent('login-started')
            form.dispatchEvent(loginEvent)
    
            const formData = new FormData(form)
            const { accessToken } = await doLogin(formData.get('username'), formData.get('password'))
            sessionStorage.setItem('accessToken', accessToken)
            window.location.href = '/'
        } catch (error) {
            const event = new CustomEvent('login-error', {
                bubbles: true,
                detail: {
                  type: 'error',
                  message: error.message
                }
              })
              form.dispatchEvent(event) 
        } finally {
            const loginEvent = new CustomEvent('login-finished')
            form.dispatchEvent(loginEvent)
        }
    })    
}