import {
  compose, applyMiddleware, createStore, Dispatch
} from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from '../reducers/rootReducer'

const loggerMiddleware = (store: object) => (next: Dispatch) => (action:any) => {
  const result = next(action)
  return result
}
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(loggerMiddleware, thunk))
)
