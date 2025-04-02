import { getToken, logout, getUser } from "./checkAuthModel.js";
import { buildLogout, showCreateButtonAd } from "./checkAuthView.js";

export async function logoutOptionController() {    
    const token = getToken()
    if (token) {
        const authOption = document.querySelector('#auth')
        const createAdButtonElement = document.querySelector('#add-product')
        const user = await getUsserLogged()
        const name = user ? user.username : ''
        buildLogout(authOption, name)
        showCreateButtonAd(createAdButtonElement)
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

export async function getUsserLogged() {
    try {
        return await getUser()
    } catch (error) {
        return null
    }
    
}