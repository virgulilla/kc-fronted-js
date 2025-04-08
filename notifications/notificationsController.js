import { buildNotification } from "./notificationsView.js"

export function notificationsController(notification) {

    const removeNotification = (newNotification) => {
        newNotification.remove()
    }
    
    const TIME = 5000
    
    const showNotification = (type, text) => {
        const newNotification = document.createElement('div')

        newNotification.innerHTML = buildNotification(type, text)
        notification.appendChild(newNotification)

        const closeButton = newNotification.querySelector('button')
        closeButton.addEventListener('click', () => {
            removeNotification(newNotification)
        })

        setTimeout(() => {
            removeNotification(newNotification)
        }, TIME)        
    }

    return {
        showNotification
    }
}