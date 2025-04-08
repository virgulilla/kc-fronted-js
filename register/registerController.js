import { doRegister } from "./registerModel.js"
import { isLogged } from "../check-auth/checkAuthController.js"

export async function registerController(form) {
    if (isLogged()) {
        window.location.href = '/'    
    }
    
    form.addEventListener('submit', async (event) => {        
        event.preventDefault()
        const formData = new FormData(form)            
        const errors = validateRegisterForm(formData)

        if (errors.length === 0) {
            handleCreateUser(formData.get('name'), formData.get('email'), formData.get('password'), form)
        } else {
            for (const error of errors) {
                const event = new CustomEvent('register-error', {
                    detail: {
                        type: 'error',
                        message: error
                    }
                })
                form.dispatchEvent(event) 
            }
        }
    })

    const handleCreateUser = async (name, email, password, form) => {
        try {
            const eventRegister = new CustomEvent('load-register-started')
            form.dispatchEvent(eventRegister)
            await doRegister(name, email, password) 
            const event = new CustomEvent('register-success', {
                detail: {
                    type: 'success',
                    message: 'Usuario creado correctamente'
                }
            })
            form.dispatchEvent(event)
            setTimeout(() => {                    
                window.location.href= '/'        
            }, 3000)                
        } catch (error) {
            const event = new CustomEvent('register-error', {
                detail: {
                    type: 'error',
                    message: error.message
                }
            })
            form.dispatchEvent(event) 
        } finally {
            const eventRegister = new CustomEvent('load-register-finished')
            form.dispatchEvent(eventRegister)
        }
        
    }
    
    const validateRegisterForm = (formData) => {
        const errors = []
        
        const email = formData.get('email')
        const password = formData.get('password')
        const confirmPassword = formData.get('confirm-password')
        
        const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        
        if (!emailRegExp.test(email)) {
            errors.push('El formato del email es incorrecto')
        }
        
        if (password !== confirmPassword) {
            errors.push('Las contraseñas no coinciden')
        }
        
        return errors
    }
}