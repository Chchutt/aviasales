import React from 'react'
import './index.scss'
import { useDispatch } from 'react-redux'

import { setBtnCheep, setBtnRel, setBtnFast } from '../../redux/actions/actionButtons'

export function SwitchTabCenter(): React.ReactElement {
  const dispatch = useDispatch()
  return (
    <div className="tabCenter">
      <input type="button" className="center-button" onClick={() => dispatch(setBtnCheep())} value="САМЫЙ ДЕШЕВЫЙ" />
      <input type="button" className="center-button" onClick={() => dispatch(setBtnFast())} value="САМЫЙ БЫСТРЫЙ" />
      <input type="button" className="center-button" onClick={() => dispatch(setBtnRel())} value="ОПТИМАЛЬНЫЙ" />
    </div>
  )
}
