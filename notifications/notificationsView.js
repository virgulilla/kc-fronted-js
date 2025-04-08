export const buildNotification = (type, text) => {
    const classes = type === 'success'
      ? 'bg-emerald-100 text-emerald-700'
      : 'bg-red-100 text-red-700'
  
    return `
      <div class="flex justify-between items-center ${classes} p-3 rounded-md">
        <span class="text-sm">${text}</span>
        <button class="text-lg font-bold leading-none ml-4 hover:text-black focus:outline-none">×</button>
      </div>
    `
  }