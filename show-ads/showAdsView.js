export const buildAd = (adElement, ad, showDeleteButton) => {
  adElement.className = 'bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow'
  const deleteButton = showDeleteButton ? 
    `<div class="flex justify-end">
  <button type="button" data-id=${ad.id} class="delete-ad bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition">
    Eliminar
  </button>
</div>` : ''
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
          ${deleteButton}
        </div>
      `   
}

export const buildNoAdsAdvice = () => {
  return '<p class="text-gray-500 text-center col-span-full">No hay anuncios disponibles.</p>'
}

export const flashSuccessMessage = (elem) => {
  const message = sessionStorage.getItem('successMessage')
  if (!message) return
  elem.textContent = message
  elem.classList.remove('hidden')
  elem.classList.remove('bg-red-100', 'text-red-700')
  elem.classList.add('bg-emerald-100', 'text-emerald-700')
  sessionStorage.removeItem('successMessage')
}

export const flashErrorMessage = (elem) => {  
  elem.textContent = 'Error al cargar los anuncios.'
  elem.classList.remove('hidden')  
  elem.classList.remove('bg-emerald-100', 'text-emerald-700')
  elem.classList.add('bg-red-100', 'text-red-700')
}

export const updatePagination = (page, totalPages) => {
  const prevBtn = document.querySelector('#prev-page')
  const nextBtn = document.querySelector('#next-page')
  if (prevBtn) prevBtn.disabled = page <= 1
  if (nextBtn) nextBtn.disabled = page >= totalPages
}

export function showLoading(elem) {
  elem.innerHTML = `
    <div class="flex justify-center items-center col-span-full py-8">
      <div class="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-opacity-50"></div>
    </div>
  `;
}