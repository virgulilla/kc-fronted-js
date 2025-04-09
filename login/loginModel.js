export async function doLogin(email, password) {
  const response = await fetch('http://localhost:8000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: email,
      password
    })
  })
  
  if (!response.ok) {
    throw new Error('Error al iniciar sesión')
  }

  const { accessToken } = await response.json()

  return accessToken
}