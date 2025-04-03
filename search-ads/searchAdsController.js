export function initSearch(formSelector = '#search') {
    const searchForm = document.querySelector(formSelector)
    if (!searchForm) return
  
    const input = searchForm.querySelector('input')
    const params = new URLSearchParams(window.location.search)
    const query = params.get('q')
  
    if (input && query) input.value = query
  
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault()
      const formData = new FormData(searchForm)
      const value = formData.get(input.name || 'search')
      window.location.href = `/index.html?q=${encodeURIComponent(value)}`
    })
  }