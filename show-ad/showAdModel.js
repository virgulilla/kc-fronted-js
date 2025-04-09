export async function getAd(adId) {
  const response = await fetch(`http://localhost:8000/api/ads/${adId}`)

  if (!response.ok) {
    throw new Error('No se encuentra el anuncio')
  }

  return await response.json()    
}