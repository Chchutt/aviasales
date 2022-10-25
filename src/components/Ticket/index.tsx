import React, { useEffect } from 'react'

import { dateHelper, durationToTime } from '../../helpers/dateHelper'
import './index.scss'
import { TicketView } from '../../redux/actions/actionsType'

export const Ticket = ({
  carrier, price, segments, id
}: TicketView): React.ReactElement => {
  const timeToOne = segments[0].date.split('T')[1].slice(0, 5)
  const timeToTwo = segments[1].date.split('T')[1].slice(0, 5)
  const timesOne = dateHelper(segments[0].date, segments[0].duration)
  const timesTwo = dateHelper(segments[1].date, segments[1].duration)
  function prices(price: string | number) {
    const strPrice = price.toString()
    if (strPrice.length === 6) {
      return `${strPrice.slice(0, 3)} ${strPrice.slice(3, 6)} Р`
    }
    if (strPrice.length === 5) {
      return `${strPrice.slice(0, 2)} ${strPrice.slice(2, 5)} Р`
    }
  }
  function stopsLen(stops: string[]) {
    if (stops.length === 1) {
      return `${stops.length} пересадка`
    }
    if (stops.length > 1) {
      return `${stops.length} пересадки`
    }
    return 'без пересадок'
  }
  return (
    <div className="ticket" key={id}>
      <div className="head">
        <span className="price">{prices(price)}</span>
        <img className="companyLogo" src={`//pics.avs.io/99/36/${carrier}.png`} alt="logo-company" />
      </div>
      <div className="bottom">
        <div className="citi">
          <p className="time-title">{`${segments[0].destination} - ${segments[1].destination}`}</p>
          <p className="time-containers">{`${timeToOne} - ${timesOne}`}</p>
        </div>
        <div className="time">
          <p className="time-title">В пути</p>
          <p className="time-containers">{durationToTime(segments[0].duration)}</p>
        </div>
        <div className="rotate">
          <p className="time-title">{stopsLen(segments[0].stops)}</p>
          <p className="time-containers">{segments[0].stops.join(' ')}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="citi">
          <p className="time-title">{`${segments[1].destination} - ${segments[0].destination}`}</p>
          <p className="time-containers">{`${timeToTwo} - ${timesTwo}`}</p>
        </div>
        <div className="time">
          <p className="time-title">В пути</p>
          <p className="time-containers">{durationToTime(segments[1].duration)}</p>
        </div>
        <div className="rotate">
          <p className="time-title">{stopsLen(segments[1].stops)}</p>
          <p className="time-containers">{segments[1].stops.join(' ')}</p>
        </div>
      </div>
    </div>
  )
}
