import { call, put, takeEvery } from "redux-saga/effects"
import { GET_ALBUMS, SAVE_ALBUMS } from "./constants"

import { queryAlbums } from "./service"

function* getAlbums() {
  const albums = yield call(queryAlbums)

  yield put({
    type: SAVE_ALBUMS,
    payload: albums
  })
}

export default function* albumsSaga() {
  yield takeEvery(GET_ALBUMS, getAlbums)
}