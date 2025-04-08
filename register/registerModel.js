export async function doRegister(name, email, password) {
  const response = await fetch('http://localhost:8000/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      username: email,
      password
    })
  })

  if (!response.ok) {
    const data = await response.json()
    throw new Error(data.message)
  }
}