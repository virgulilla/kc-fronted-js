export async function newAd(token, data) {
    const {userId, name, description, price, type, photo} = data
    const response = await fetch('http://127.0.0.1:8000/api/ads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        userId,
        name,
        description,
        price,
        type,
        photo
      })

    })

    if (!response.ok) {
      throw new Error('Error creando el anuncio')
    }
    
    return await response.json()
 }