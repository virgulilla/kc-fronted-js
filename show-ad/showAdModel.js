export async function getAd(adId) {
  try {
    const response = await fetch(`http://localhost:8000/api/ads/${adId}`)
    return await response.json()
  } catch (error) {
    throw new Error('Error al cargar el anuncio')
  } 
    
}