import { buildMenu, buildMenuLogged } from "./menuMobileView.js"
import { getUser } from '../utils/decodeToken.js'

export function menuMobileController(nav) {    
    const token = !!localStorage.getItem('token')
    if (token) {
        const user = getUser()
        buildMenuLogged(nav, user.username)

        const logout = document.querySelector('#logout')
        if (logout) {
            logout.addEventListener('click', (event) => {
                event.preventDefault()
                localStorage.removeItem('token')
                window.location.href = '/'
            })
        }
    } else {        
        buildMenu(nav)
    }
}