export const buildAdCard = (adElement, ad, user) => {
  adElement.className = 'bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow'  
  const editIcon = user?.id === ad.userId
    ? `<a href="edit-ad.html?id=${ad.id}" title="Editar">
         <!-- Icono de lápiz SVG -->
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536M9 13l6-6m2-2a2.828 2.828 0 114 4L9 21H5v-4L17.232 3.768z" />
         </svg>
       </a>`
    : ''
  
 return `
      <article class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="${ad.photo || 'https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-acampada-de-otono.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}" 
            alt="${ad.name}" 
            class="w-full h-64 object-cover" />

        <div class="p-6 space-y-4">
          <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold text-emerald-800">${ad.name}</h1>
            ${editIcon}
          </div>
          <p class="text-gray-700">${ad.description}</p>

          <div class="flex items-center justify-between">
            <p class="text-xl font-semibold text-gray-900">${ad.price} €</p>
            <span class="px-3 py-1 text-sm font-medium rounded-full ${
              ad.type === 'sell' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
            }">${ad.type === 'sell' ? 'Venta' : 'Compra'}</span>
          </div>          
        </div>
      </article>
    `
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
  elem.textContent = 'Error al cargar el anuncio.'
  elem.classList.remove('hidden')  
  elem.classList.remove('bg-emerald-100', 'text-emerald-700')
  elem.classList.add('bg-red-100', 'text-red-700')
}

export const buildNoAdAdvice = () => {
  return '<p class="text-gray-500 text-center col-span-full">El anuncio solicitado no está disponible.</p>'   
}

export function showLoading(elem) {
  elem.innerHTML = `
    <div class="flex justify-center items-center col-span-full py-8">
      <div class="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-opacity-50"></div>
    </div>
  `;
}