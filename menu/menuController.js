import { getUserByToken } from '../services/userService.js'
import { buildMenu, buildMenuLogged } from './menuView.js'

export async function menuController(header) {
    const desktopNav = header.querySelector('#nav-desktop')
    const mobileNav = header.querySelector('#nav-mobile')
    const mobileMenu = header.querySelector('#mobile-menu')
    const mobileToggle = header.querySelector('#mobile-menu-button')

    if (!desktopNav || !mobileNav) return

    const getUserName = async () => {
        let name = localStorage.getItem('username')
        if (name) return name

        try {
            const user = await getUserByToken()
            name = user.name
            localStorage.setItem('username', name)
        } catch (error) {
            name = ''
        }

        return name
    }

    const token = !!localStorage.getItem('token')
    if (token) {
        const name = await getUserName()
        buildMenuLogged(desktopNav, name)
        buildMenuLogged(mobileNav, name)
    } else {
        buildMenu(desktopNav)
        buildMenu(mobileNav)
    }

    // Delegación para logout (válido para ambos menús)
    header.addEventListener('click', (event) => {
        if (event.target.id === 'logout') {
            event.preventDefault()
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            window.location.href = '/'
        }
    })

    // Toggle menú mobile
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden')
        })
    }
}
