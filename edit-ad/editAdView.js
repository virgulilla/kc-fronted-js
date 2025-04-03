export const buildMessageError = (elem, msg) => {
    elem.textContent = msg
    elem.classList.remove('hidden')
    elem.classList.remove('bg-emerald-100', 'text-emerald-700')
    elem.classList.add('bg-red-100', 'text-red-700')
}

export const buildAd = (ad) => {
    document.querySelector('#name').value = ad.name
    document.querySelector('#description').value = ad.description
    document.querySelector('#price').value = ad.price
    document.querySelector('#photo').value = ad.photo || ''
    const typeSelect = document.querySelector('#type')
    Array.from(typeSelect.options).forEach(option => {
        option.selected = option.value === ad.type
    })
}