import { buildMenu, buildMenuLogged } from "./menuMobileView.js"
import { decodeToken } from '../utils/decodeToken.js'

export function menuMobileController(nav) {    
    const token = localStorage.getItem('token')
    if (token) {
        const user = decodeToken()
        buildMenuLogged(nav, user.username)
    } else {        
        buildMenu(nav)
    }
}