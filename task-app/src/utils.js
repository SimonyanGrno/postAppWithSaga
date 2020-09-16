export const baseURL = "https://jsonplaceholder.typicode.com"

export async function request(url, options) {
  const response = await fetch(url, options)
  return await response.json()
}