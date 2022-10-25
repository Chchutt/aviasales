import axios from 'axios'
import { Dispatch } from 'redux'

import { FetchActions, SearchTicketsActionTypes } from './actionsType'

export function fetchIdStart() {
  return {
    type: SearchTicketsActionTypes.FETCH_SEARCHID_START
  }
}

export function fetchIdError(e:any) {
  return {
    type: SearchTicketsActionTypes.FETCH_SEARCHID_ERROR,
    error: e
  }
}

export function moreTickets(payload: number) {
  return {
    type: SearchTicketsActionTypes.MORE_TICKETS,
    payload: payload + 5
  }
}

export function fetchId() {
  return async (dispatch: Dispatch<FetchActions>) => {
    dispatch({ type: SearchTicketsActionTypes.FETCH_SEARCHID_START })
    try {
      const res = await axios.get('https://aviasales-test-api.kata.academy/search')
      const { searchId } = res.data
      dispatch({ type: SearchTicketsActionTypes.FETCH_SEARCHID_SUCCESS, payload: searchId })
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatch(fetchTickets(searchId))
    } catch (error: any) {
      dispatch({ type: SearchTicketsActionTypes.FETCH_SEARCHID_ERROR, payload: error })
    }
  }
}

export function fetchIdSuccess() {
  return {
    type: SearchTicketsActionTypes.FETCH_SEARCHID_SUCCESS,
  }
}

export function fetchTicketsStart() {
  return {
    type: SearchTicketsActionTypes.FETCH_TICKETS_START
  }
}

export function fetchTicketsError(e: any) {
  return {
    type: SearchTicketsActionTypes.FETCH_TICKETS_ERROR,
    error: e
  }
}

export function fetchTickets(searchId: string) {
  return async (dispatch: Dispatch<FetchActions>) => {
    dispatch({ type: SearchTicketsActionTypes.FETCH_TICKETS_START })
    try {
      const res = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      const { tickets } = res.data
      dispatch({ type: SearchTicketsActionTypes.FETCH_TICKETS_SUCCESS, payload: tickets })
    } catch (e:any) {
      dispatch({ type: SearchTicketsActionTypes.FETCH_TICKETS_ERROR, payload: e })
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatch(fetchTickets(searchId))
    }
  }
}

export function fetchTicketsSuccess(searchId: any[]) {
  return {
    type: SearchTicketsActionTypes.FETCH_TICKETS_SUCCESS,
    searchId
  }
}
