export const buildMessageError = (elem, msg) => {
    elem.textContent = msg
    elem.classList.remove('hidden')
    elem.classList.add('bg-red-100', 'text-red-700')
}