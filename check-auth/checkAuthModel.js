export function getToken() {
    return sessionStorage.getItem('accessToken') 
}

export function logout() {
    sessionStorage.removeItem('accessToken')    
}

export async function getUser() {
    try {
        const token = getToken()
        const response = await fetch('http://127.0.0.1:8000/auth/me', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            }
        })
        return await response.json()
        
    } catch (error) {
        throw new Error('Error al recuperar el usuario')
    }
}