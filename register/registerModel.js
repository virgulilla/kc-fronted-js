export async function doRegister(username, password) {
  try {
    const response = await fetch('http://127.0.0.1:8000/auth/register', {
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
    throw new Error('Error en el registro')
  } 
}