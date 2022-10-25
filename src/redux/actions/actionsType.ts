// export const MORE_TICKETS = 'MORE_TICKETS'
// export const NO_MORE_TICKETS = 'NO_MORE_TICKETS'

export enum SearchTicketsActionTypes {
  FETCH_SEARCHID_START = 'FETCH_SEARCHID_START',
  FETCH_SEARCHID_SUCCESS = 'FETCH_SEARCHID_SUCCESS',
  FETCH_SEARCHID_ERROR = 'FETCH_SEARCHID_ERROR',
  FETCH_TICKETS_START = 'FETCH_TICKETS_START',
  FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',
  FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR',
  MORE_TICKETS = 'MORE_TICKETS',
}

interface FetchSearchIdStart {
  type: SearchTicketsActionTypes.FETCH_SEARCHID_START;
}
interface FetchSearchIdSuccess {
  type: SearchTicketsActionTypes.FETCH_SEARCHID_SUCCESS;
  payload: string;
}
interface FetchSearchIdError {
  type: SearchTicketsActionTypes.FETCH_SEARCHID_ERROR;
  payload: Error | null;
}
interface FetchTicketsStart {
  type: SearchTicketsActionTypes.FETCH_TICKETS_START;
}
interface FetchTicketsSuccess {
  type: SearchTicketsActionTypes.FETCH_TICKETS_SUCCESS;
  payload: any[];
}
interface FetchTicketsError {
  type: SearchTicketsActionTypes.FETCH_TICKETS_ERROR;
  payload: Error;
}

interface MoreTickets {
  type: SearchTicketsActionTypes.MORE_TICKETS;
  payload: number;
}
export type FetchActions =
  | FetchSearchIdError
  | FetchSearchIdStart
  | FetchSearchIdSuccess
  | FetchTicketsStart
  | FetchTicketsSuccess
  | FetchTicketsError
  | MoreTickets;

export interface TicketsState {
  tickets: any[];
  prevTickets: any[];
  error: null | Error;
  loadingTickets: boolean;
  loadingId: boolean;
  searchId: string;
  showTicketsLen: number;
}

export enum ButtonsActionsTypes {
  BUTTON_CHEEP = 'BUTTON_CHEEP',
  BUTTON_FASTEST = 'BUTTON_FASTEST',
  BUTTON_RELEVANT = 'BUTTON_RELEVANT',
}

interface ButtonCheap {
  type: ButtonsActionsTypes.BUTTON_CHEEP;
}

interface ButtonFastest {
  type: ButtonsActionsTypes.BUTTON_FASTEST;
}

interface ButtonRelevant {
  type: ButtonsActionsTypes.BUTTON_RELEVANT;
}

export type ButtonsActions = ButtonCheap | ButtonFastest | ButtonRelevant;

export interface ButtonState {
  sort: string;
}

export enum CheckBoxActionTypes {
  CHECKBOX_ACTIVE_ALL = 'CHECKBOX_ACTIVE_ALL',
  CHECKBOX_ACTIVE_WITHOUT = 'CHECKBOX_ACTIVE_WITHOUT',
  CHECKBOX_ACTIVE_ONE = 'CHECKBOX_ACTIVE_ONE',
  CHECKBOX_ACTIVE_TWO = 'CHECKBOX_ACTIVE_TWO',
  CHECKBOX_ACTIVE_THREE = 'CHECKBOX_ACTIVE_THREE',
}

interface CheckedAll {
  type: CheckBoxActionTypes.CHECKBOX_ACTIVE_ALL;
}
interface CheckedOne {
  type: CheckBoxActionTypes.CHECKBOX_ACTIVE_ONE;
}
interface CheckedTwo {
  type: CheckBoxActionTypes.CHECKBOX_ACTIVE_TWO;
}
interface CheckedTree {
  type: CheckBoxActionTypes.CHECKBOX_ACTIVE_THREE;
}
interface CheckedWithout {
  type: CheckBoxActionTypes.CHECKBOX_ACTIVE_WITHOUT;
}

export type CheckedActions = CheckedAll | CheckedOne | CheckedTwo | CheckedTree | CheckedWithout;

export interface CheckBoxState {
  all: boolean;
  without: boolean;
  one: boolean;
  two: boolean;
  three: boolean;
}
interface TicketView2{
  date: string;
  destination: string;
  duration: number;
  origin: string;
  stops: string[];
}

export interface TicketView {
  carrier: string;
  price: number;
  segments: TicketView2[];
  id?: number;
}
