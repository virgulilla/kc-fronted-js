export async function deletetAd(adId) {
  try {
    const token = localStorage.getItem('token')
    await fetch(`http://localhost:8000/api/ads/${adId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    
  } catch (error) {
    throw new Error('Error al eliminar el anuncio')
  } 
}