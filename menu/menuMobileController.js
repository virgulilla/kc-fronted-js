import { buildMenu, buildMenuLogged } from './menuView.js'
import { menuController } from './menuController.js'

export function menuMobileController(nav) {
    return menuController({
        nav,
        buildMenu,
        buildMenuLogged,
        extraSetup: () => {
            const buttonMenu = document.querySelector('#mobile-menu-button')
            if (buttonMenu) {
                buttonMenu.addEventListener('click', () => {
                    const mobileMenu = document.querySelector('#mobile-menu')
                    mobileMenu.classList.toggle('hidden')
                })
            }
        }
    })
}