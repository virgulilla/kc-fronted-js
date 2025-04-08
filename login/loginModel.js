export async function doLogin(username, password) {
    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })
      return await response.json()

    } catch (error) {
      throw new Error('Error al iniciar sesión')
    }
}