import { request, baseURL } from "../../utils"

export function queryPosts() {
  return request(`${baseURL}/posts`, {
    method: "GET"
  })
}

export function queryRemovePost({ id }) {
  return request(`${baseURL}/posts/${id}`, {
    method: "DELETE"
  })
}