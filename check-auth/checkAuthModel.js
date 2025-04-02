export function getToken() {
    return sessionStorage.getItem('accessToken') 
}

export function logout() {
    sessionStorage.removeItem('accessToken')    
}