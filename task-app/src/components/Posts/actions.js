import { GET_POSTS, SAVE_POSTS, REMOVE_POST } from "./constants"

export const getPosts = () => {
  return { type: GET_POSTS }
}

export const removePost = (id) => {
  return {
    type: REMOVE_POST,
    payload: { id }
  }
}