export function loaderController() {
    const $loader = document.querySelector('.loader')
    const loader = () => {
        $loader.classList.toggle('hidden')
    }

    return { loader }
}