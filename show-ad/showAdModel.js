export async function getAd(adId) {
    const response = await fetch(`http://127.0.0.1:8000/api/ads/${adId}`)
    if (!response.ok) {
      throw new Error('Error al cargar el anuncio')
    }
    
    return await response.json()
 }