import { request, baseURL } from "../../utils" 

export function queryAlbums() {
  return request(`${baseURL}/albums`)
}