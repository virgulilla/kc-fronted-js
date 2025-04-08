export async function deletetAd(adId, token) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/ads/${adId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    return await response.json()
    
  } catch (error) {
    throw new Error('Error al eliminar el anuncio')
  } 
}