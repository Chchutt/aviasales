import { FetchActions, SearchTicketsActionTypes, TicketsState } from '../actions/actionsType'

const initialState = {
  tickets: [],
  prevTickets: [],
  error: null,
  loadingTickets: false,
  loadingId: false,
  searchId: '',
  showTicketsLen: 5,
}

export const ticketsReducer = (
  state: TicketsState = initialState,
  action: FetchActions
): TicketsState => {
  switch (action.type) {
  case SearchTicketsActionTypes.FETCH_TICKETS_START:
    return {
      ...state,
      loadingTickets: true,
    }
  case SearchTicketsActionTypes.FETCH_TICKETS_ERROR:
    return {
      ...state,
      loadingTickets: false,
      error: action.payload,
    }
  case SearchTicketsActionTypes.FETCH_TICKETS_SUCCESS:
    return {
      ...state,
      loadingTickets: false,
      tickets: [...state.tickets, ...action.payload],
    }
  case SearchTicketsActionTypes.FETCH_SEARCHID_START:
    return {
      ...state,
      loadingId: true,
    }
  case SearchTicketsActionTypes.FETCH_SEARCHID_ERROR:
    return {
      ...state,
      loadingId: false,
      error: action.payload,
    }
  case SearchTicketsActionTypes.FETCH_SEARCHID_SUCCESS:
    return {
      ...state,
      loadingId: false,
      searchId: action.payload,
    }
  case SearchTicketsActionTypes.MORE_TICKETS:
    return {
      ...state,
      showTicketsLen: state.showTicketsLen + action.payload,
    }
  default:
    return {
      ...state,
    }
  }
}
