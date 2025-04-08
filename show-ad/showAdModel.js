export async function getAd(adId) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/ads/${adId}`)
    return await response.json()
  } catch (error) {
    throw new Error('Error al cargar el anuncio')
  } 
    
}