import { ButtonsActions, ButtonsActionsTypes, ButtonState } from '../actions/actionsType'

const initialState = {
  sort: '',
}

export const buttonsReducer = (
  state: ButtonState = initialState,
  action: ButtonsActions
):
    ButtonState => {
  switch (action.type) {
  case ButtonsActionsTypes.BUTTON_CHEEP:
    return {
      ...state,
      sort: 'cheep',
    }
  case ButtonsActionsTypes.BUTTON_FASTEST:
    return {
      ...state,
      sort: 'fast',
    }
  case ButtonsActionsTypes.BUTTON_RELEVANT:
    return {
      ...state,
      sort: 'relevant',
    }
  default:
    return {
      ...state
    }
  }
}
