import { getToken, logout } from "./checkAuthModel.js";
import { buildLogout } from "./checkAuthView.js";

export function logoutOptionController() {    
    const token = getToken()
    if (token) {
        const authOption = document.querySelector('#auth')
        buildLogout(authOption)
        const logoutElem = document.querySelector('.logout')
        if (logoutElem) {
            logoutElem.addEventListener('click', (e) => {
                e.preventDefault()
                logout()
                window.location.href = '/'
            })
        }    
    } 
}

export function isLogged() {
    return getToken() !== null
}