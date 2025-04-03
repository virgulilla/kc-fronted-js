export const buildMessageError = (elem, msg) => {
    elem.textContent = msg
    elem.classList.remove('hidden')
    elem.classList.remove('bg-emerald-100', 'text-emerald-700')
    elem.classList.add('bg-red-100', 'text-red-700')
}