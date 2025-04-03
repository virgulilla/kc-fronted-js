export async function getAds(filters) {
    const {search, page, limit} = filters
    
    const pagination = `?_page=${page}&_limit=${limit}`
    const findByName = search ? `&name_like=${search}` : ''
    
    const response = await fetch(`http://localhost:8000/api/ads${pagination}${findByName}`)
    if (!response.ok) {
      throw new Error('Error al cargar los anuncios')
    }

    const ads = await response.json()
    return {
      ads: ads,
      total: parseInt(response.headers.get('X-Total-Count'), 10) || 0
    }
 }