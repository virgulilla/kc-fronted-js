import { doLogin } from "./loginModel.js"
import { isLogged } from "../check-auth/checkAuthController.js"
import { REGEXP } from "../utils/constants.js"

export async function loginController(form) {

    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        if (isLogged()) {
            window.location.href = '/'    
        }

        const formData = new FormData(form)            
        const errors = validateRegisterForm(formData)
        if (errors.length === 0) {
            handleLoginUser(formData.get('email'), formData.get('password'), form)
        } else {
            for (const error of errors) {
                const eventLoginError = new CustomEvent('login-error', {
                    detail: {
                        type: 'error',
                        message: error
                    }
                })
                form.dispatchEvent(eventLoginError) 
            }
        }
    })
    
    const handleLoginUser = async (email, password, form) => {
        try {
            const eventLogin = new CustomEvent('login-started')
            form.dispatchEvent(eventLogin)
            const accessToken = await doLogin(email, password) 
            localStorage.setItem('token', accessToken)
            const event = new CustomEvent('login-success', {
                detail: {
                    type: 'success',
                    message: 'Me alegra que estés de vuelta!'
                }
            })
            form.dispatchEvent(event)
            setTimeout(() => {                    
                window.location.href= '/'        
            }, 3000)                
        } catch (error) {
            const event = new CustomEvent('login-error', {
                detail: {
                    type: 'error',
                    message: error.message
                }
            })
            form.dispatchEvent(event) 
        } finally {
            const eventLogin = new CustomEvent('login-finished')
            form.dispatchEvent(eventLogin)
        }
        
    }
    
    const validateRegisterForm = (formData) => {
        const errors = []
        
        const email = formData.get('email')
        
        if (!REGEXP.mail.test(email)) {
            errors.push('El formato del email es incorrecto')
        }
        
        return errors
    }
}