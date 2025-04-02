export async function doRegister(username, password) {
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

    if (!response.ok) {
        throw new Error('No se ha podido registrar al usuario')
    }

    return await response.json()
}