export async function editAd(adId, data) {
  try {
    const {name, description, price, type, photo} = data
    const token = localStorage.getItem('token')
    const response = await fetch(`http://localhost:8000/api/ads/${adId}`, {
      method: 'PUT',
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
    return await response.json()

  } catch (error) {
    throw new Error('Error al editar el anuncio')
  } 
    
 }