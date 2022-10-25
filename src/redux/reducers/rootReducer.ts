import { combineReducers } from 'redux'

import { filterReducer } from './filterReducer'
import { buttonsReducer } from './buttonsReducer'
import { ticketsReducer } from './ticketsReducer'

export const rootReducer = combineReducers({
  filter: filterReducer,
  buttons: buttonsReducer,
  tickets: ticketsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
