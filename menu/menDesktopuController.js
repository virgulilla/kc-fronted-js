import { buildMenu, buildMenuLogged } from "./menuDesktopView.js"
import { getUser } from '../utils/decodeToken.js'

export function menuDesktopController(nav) {    
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