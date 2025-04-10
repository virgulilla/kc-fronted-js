import { buildMenu, buildMenuLogged } from "./menuDesktopView.js"
import { decodeToken } from '../utils/decodeToken.js'

export function menuDesktopController(nav) {    
    const token = localStorage.getItem('token')
    if (token) {
        const user = decodeToken()
        buildMenuLogged(nav, user.username)
    } else {        
        buildMenu(nav)
    }
}