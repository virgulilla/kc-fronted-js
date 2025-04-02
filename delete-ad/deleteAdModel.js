export async function deletetAd(adId, token) {
    const response = await fetch(`http://127.0.0.1:8000/api/ads/${adId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error('Error eliminando el anuncio')
    }
    
    return await response.json()
 }