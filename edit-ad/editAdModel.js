export async function editAd(token, adId, data) {
  try {
    const {userId, name, description, price, type, photo} = data
    const response = await fetch(`http://localhost:8000/api/ads/${adId}`, {
      method: 'PUT',
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
    return await response.json()

  } catch (error) {
    throw new Error('Error al editar el anuncio')
  } 
    
 }