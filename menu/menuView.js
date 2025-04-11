export const buildMenu = (nav) => {
  nav.innerHTML = `
    <a id="auth" href="/login.html" 
       class="text-sm text-emerald-600 font-medium hover:underline transition">Login</a>
    <a id="register" href="/register.html"
       class="text-sm text-emerald-600 font-medium hover:underline transition">Registro</a>`
}

export const buildMenuLogged = (nav, name) => {
  nav.innerHTML = `
    <span class="text-sm text-black-600 font-medium">Hola ${name}</span>
    <a id="logout" href="#" 
      class="text-sm text-emerald-600 font-medium hover:underline transition">Logout</a>
    <a id="add-product" href="/new-ad.html" 
       class="bg-emerald-500 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-md transition">
      Crear anuncio
    </a>`
}