export function logoutController(elem) {
    elem.addEventListener('click', (event) => {
        event.preventDefault()
        localStorage.removeItem('token')
        window.location.href = '/'
    })
}