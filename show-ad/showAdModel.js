export async function getAd(adId) {
  const response = await fetch(`http://localhost:8000/api/ads/${adId}?_expand=user`)

  if (!response.ok) {
    throw new Error('No se encuentra el anuncio')
  }

  return await response.json()    
}

export async function removeAd(adId) {
  const token = localStorage.getItem('token')
  const response = await fetch(`http://localhost:8000/api/ads/${adId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  if (!response.ok) {
    throw new Error('Error al eliminar el anuncio')
  }
}