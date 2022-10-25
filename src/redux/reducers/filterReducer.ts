import { CheckBoxActionTypes, CheckBoxState, CheckedActions } from '../actions/actionsType'

const initialState = {
  all: true,
  without: true,
  one: true,
  two: true,
  three: true,
}

export const filterReducer = (state: CheckBoxState = initialState, action: CheckedActions) => {
  switch (action.type) {
  case CheckBoxActionTypes.CHECKBOX_ACTIVE_ALL:
    if (!state.all) {
      return {
        all: true,
        without: true,
        one: true,
        two: true,
        three: true,
      }
    }
    return {
      all: !state.all,
      without: !state.without,
      one: !state.one,
      two: !state.two,
      three: !state.three,
    }

  case CheckBoxActionTypes.CHECKBOX_ACTIVE_WITHOUT:
    if (!state.all) {
      if (state.one && state.two && state.three) {
        return {
          ...state, without: !state.without, all: !state.all
        }
      }
      return {
        ...state, without: !state.without
      }
    }
    return {
      ...state, all: !state.all, without: !state.without
    }
  case CheckBoxActionTypes.CHECKBOX_ACTIVE_ONE:
    if (!state.all) {
      if (state.without && state.two && state.three) {
        return {
          ...state, one: !state.one, all: !state.all
        }
      }
      return {
        ...state, one: !state.one
      }
    }
    return {
      ...state, one: !state.one, all: !state.all
    }
  case CheckBoxActionTypes.CHECKBOX_ACTIVE_TWO:
    if (!state.all) {
      if (state.without && state.one && state.three) {
        return {
          ...state, two: !state.two, all: !state.all
        }
      }
      return {
        ...state, two: !state.two
      }
    }
    return {
      ...state, two: !state.two, all: !state.all
    }
  case CheckBoxActionTypes.CHECKBOX_ACTIVE_THREE:
    if (!state.all) {
      if (state.without && state.one && state.two) {
        return {
          ...state, three: !state.three, all: !state.all
        }
      }
      return {
        ...state, three: !state.three
      }
    }
    return {
      ...state, three: !state.three, all: !state.all
    }
  default:
    return state
  }
}
