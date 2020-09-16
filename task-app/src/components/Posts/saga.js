import { call, put, takeEvery } from "redux-saga/effects"

import { queryPosts, queryRemovePost } from "./service"
import { GET_POSTS, SAVE_POSTS, REMOVE_POST } from "./constants" 

function* getAllPosts() {
  const posts = yield call(queryPosts)

  yield put({
    type: SAVE_POSTS,
    payload: posts
  })
}

function* removePost({ payload }) {
  yield call(queryRemovePost, payload)
}

export default function* postsSaga() {
  yield takeEvery(GET_POSTS, getAllPosts);
  yield takeEvery(REMOVE_POST, removePost)
}