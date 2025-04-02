export async function getAds() {
    const response = await fetch('http://localhost:8000/api/ads')
    if (!response.ok) {
      throw new Error('Error al cargar los anuncios')
    }
    return await response.json()
 }