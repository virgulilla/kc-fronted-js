export const buildLogout = (elem, name) => {
    const helloElement = document.createElement('span')
    helloElement.textContent = `Hola ${name}, `
    helloElement.classList.add('text-sm', 'text-black-600', 'font-medium')
    elem.before(helloElement)
    elem.textContent = 'Logout' 
    elem.classList.toggle('logout')
    elem.setAttribute('href', '/logout.html')
}