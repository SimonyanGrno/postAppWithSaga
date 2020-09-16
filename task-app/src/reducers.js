import { combineReducers } from "redux"

import allPosts from "./components/Posts/reducer"
import allAlbums from "./components/Albums/reducer"

export default combineReducers({ allPosts, allAlbums })