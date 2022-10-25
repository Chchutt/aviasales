import { CheckBoxActionTypes } from './actionsType'

export function setCheckboxAll() {
  return {
    type: CheckBoxActionTypes.CHECKBOX_ACTIVE_ALL
  }
}

export function setCheckboxWithout() {
  return {
    type: CheckBoxActionTypes.CHECKBOX_ACTIVE_WITHOUT
  }
}

export function setCheckboxOne() {
  return {
    type: CheckBoxActionTypes.CHECKBOX_ACTIVE_ONE
  }
}

export function setCheckboxTwo() {
  return {
    type: CheckBoxActionTypes.CHECKBOX_ACTIVE_TWO
  }
}

export function setCheckboxThree() {
  return {
    type: CheckBoxActionTypes.CHECKBOX_ACTIVE_THREE
  }
}
