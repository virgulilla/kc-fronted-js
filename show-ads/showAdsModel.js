export async function getAds(filters) {
    const {search} = filters
    
    const findByName = search ? `/?name_like=${search}` : ''
    const response = await fetch(`http://localhost:8000/api/ads${findByName}`)
    if (!response.ok) {
      throw new Error('Error al cargar los anuncios')
    }
    return await response.json()
 }