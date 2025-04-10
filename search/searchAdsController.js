export function searchController(search) {    
  const input = search.querySelector('input')
  const params = new URLSearchParams(window.location.search)
  const query = params.get('q')
  input.value = query
  
  search.addEventListener('submit', (event) => {
    event.preventDefault()      
    window.location.href = `/index.html?q=${encodeURIComponent(input.value)}`
  })

}
