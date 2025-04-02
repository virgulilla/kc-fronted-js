export function getToken() {
    return sessionStorage.getItem('accessToken') 
}

export function logout() {
    sessionStorage.removeItem('accessToken')    
}

export async function getUser() {
    const token = getToken()
    if (token !== null) {
        const response = await fetch('http://127.0.0.1:8000/auth/me', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
        })

        if (!response.ok) {
            throw new Error('Error al recuperar el usuario')
          }

        return await response.json()
        
    }
}