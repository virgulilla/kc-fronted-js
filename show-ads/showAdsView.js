export const buildAd = (adElement, ad) => {
  adElement.className = 'bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow'
  
 return `
        <a href="card.html?id=${ad.id}"><img src="${ad.photo || 'https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-acampada-de-otono.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}" alt="${ad.name}"
            class="w-full h-48 object-cover" /></a>
        <div class="p-4 space-y-2">
          <a href="card.html?id=${ad.id}"><h3 class="text-lg font-semibold text-emerald-800">${ad.name}</h3></a>
          <p class="text-gray-600 text-sm">${ad.description}</p>
          <p class="text-gray-900 font-bold">${ad.price} €</p>
          <span class="inline-block px-2 py-1 text-xs font-medium rounded-full ${
            ad.type === 'sell' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
          }">${ad.type === 'sell' ? 'Venta' : 'Compra'}</span>
        </div>
      `   
}

export const buildNoAdsAdvice = () => {
  return '<p class="text-gray-500 text-center col-span-full">No hay anuncios disponibles.</p>'
}

export const updatePagination = (page, totalPages) => {
  const prevBtn = document.querySelector('#prev-page')
  const nextBtn = document.querySelector('#next-page')
  if (prevBtn) prevBtn.disabled = page <= 1
  if (nextBtn) nextBtn.disabled = page >= totalPages
}