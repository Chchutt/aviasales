import React from 'react'
import './index.scss'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import {
  setCheckboxAll,
  setCheckboxWithout,
  setCheckboxOne,
  setCheckboxTwo,
  setCheckboxThree,
} from '../../redux/actions/actionsFilter'

export function SwitchTabLeft(): React.ReactElement {
  const checkbox = useTypedSelector((state) => state.filter)
  const dispatch = useDispatch()
  return (
    <div className="tabLeft">
      <span className="label-left">КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <label className="checkbox-left">
        <input
          type="checkbox"
          className="all"
          checked={checkbox.all}
          style={{ zoom: 1.5 }}
          onClick={() => {
            dispatch(setCheckboxAll())
          }}
        />
        <span className="checkbox-text">Все</span>
      </label>
      <label className="checkbox-left">
        <input
          type="checkbox"
          className="without"
          checked={checkbox.without}
          style={{ zoom: 1.5 }}
          onClick={() => {
            dispatch(setCheckboxWithout())
          }}
        />
        <span className="checkbox-text">Без пересадок</span>
      </label>
      <label className="checkbox-left">
        <input
          type="checkbox"
          className="one"
          checked={checkbox.one}
          style={{ zoom: 1.5 }}
          onClick={() => {
            dispatch(setCheckboxOne())
          }}
        />
        <span className="checkbox-text">1 пересадка</span>
      </label>
      <label className="checkbox-left">
        <input
          type="checkbox"
          className="two"
          checked={checkbox.two}
          style={{ zoom: 1.5 }}
          onClick={() => {
            dispatch(setCheckboxTwo())
          }}
        />
        <span className="checkbox-text">2 пересадки</span>
      </label>
      <label className="checkbox-left">
        <input
          type="checkbox"
          className="tree"
          checked={checkbox.three}
          style={{ zoom: 1.5 }}
          onClick={() => {
            dispatch(setCheckboxThree())
          }}
        />
        <span className="checkbox-text">3 пересадки</span>
      </label>
    </div>
  )
}
