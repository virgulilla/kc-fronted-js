export async function newAd(data) {
    const token = localStorage.getItem('token')
    const {name, description, price, type, photo} = data
    const response = await fetch('http://localhost:8000/api/ads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
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
 }