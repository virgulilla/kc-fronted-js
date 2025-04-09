export const decodeToken = () => {
  const token = localStorage.getItem('token')
  if (!token) {
    return null
  }
  
  const parts = token.split('.')
  const payload = parts[1]  
  const decodedPayload = atob(payload.replace(/-/g, '+').replace(/_/g, '/'))
  const jsonPayload = JSON.parse(decodedPayload)

  return jsonPayload
}