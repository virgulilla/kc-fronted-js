export const buildLogout = (elem) => {
    elem.textContent = 'Logout' 
    elem.classList.toggle('logout')
    elem.setAttribute('href', '/logout.html')
}