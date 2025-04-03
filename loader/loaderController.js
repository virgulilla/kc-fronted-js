export function loaderController() {
    const loader = document.querySelector('.loader')
    const toggle = () => {
        loader.classList.toggle('hidden')
    }

    return { toggle }
}