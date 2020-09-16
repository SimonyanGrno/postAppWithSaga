import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"

import reducer from "./reducers"
import postsSaga from "./components/Posts/saga"
import albumsSaga from "./components/Albums/saga"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(postsSaga)
sagaMiddleware.run(albumsSaga)

export default store