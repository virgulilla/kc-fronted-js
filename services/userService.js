export async function getUserByToken() {
    const token = localStorage.getItem('token')
    const response = await fetch('http://localhost:8000/auth/me', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error('Error al cargar el usuario')
    }

    return await response.json()
}

export const getUserName = async () => {
    let name = localStorage.getItem('username')
    if (name) return name

    try {
        const user = await getUserByToken()
        name = user.name
        localStorage.setItem('username', name)
    } catch (error) {
        name = ''
    }

    return name
}