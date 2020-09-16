import { SAVE_ALBUMS } from "./constants"

const initialState = {
  albums: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SAVE_ALBUMS:
      return {
        ...state,
        albums: action.payload
      }
    default: 
      return state
  }
}