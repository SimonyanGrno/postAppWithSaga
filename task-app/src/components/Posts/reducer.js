import { SAVE_POSTS, REMOVE_POST } from "./constants";

const initialState = {
  posts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
}
