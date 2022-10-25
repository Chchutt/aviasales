import React from 'react'

import { Ticket } from '../Ticket'
import './index.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { CheckBoxState, TicketView } from '../../redux/actions/actionsType'
import { useTicketActions } from '../../hooks/useActions'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LoadingSvg } from '../../imgs/loading.svg'

export const TicketsList: React.FC = () => {
  const state = useTypedSelector(state => ({
    tickets: state.tickets.tickets,
    loadingId: state.tickets.loadingId,
    loadingTickets: state.tickets.loadingTickets,
    searchId: state.tickets.searchId,
    showLen: state.tickets.showTicketsLen,
    filters: state.filter,
    sort: state.buttons.sort
  }))
  const { moreTickets } = useTicketActions()
  let ticketArr: TicketView[] = state.tickets

  const filterTicketTemplate = (tickets: TicketView[], count: number) => {
    ticketArr = [...tickets.filter(fil)]

    function fil(elem: TicketView) {
      if (elem.segments[0].stops.length === count) {
        return elem
      }
    }
  }

  const filterTickets = (filters: CheckBoxState, tickets: TicketView[]) => {
    filters.without ? filterTicketTemplate(tickets, 0) : null
    filters.one ? filterTicketTemplate(tickets, 1) : null
    filters.two ? filterTicketTemplate(tickets, 2) : null
    filters.three ? filterTicketTemplate(tickets, 3) : null
    filters.all ? [tickets] : null
  }

  const sortFilter = (sort: string) => {
    sort === 'cheep' ? ticketArr.sort((a, b) => a.price - b.price) : null
    sort === 'fast' ? ticketArr.sort((a, b) => a.segments[0].duration - b.segments[0].duration) : null
    sort === 'relevant' ? ticketArr.sort((a, b) => (a.price + a.segments[0].duration) - (b.price + b.segments[0].duration)) : null
  }
  sortFilter(state.sort)
  filterTickets(state.filters, state.tickets)
  let ids = 100
  const ticketsContainer = () => {
    return (
      <div className="tickets">
        {ticketArr.slice(0, state.showLen).map((item) => {
          const { carrier, price, segments } = item
          return (
            <Ticket carrier={carrier} price={price} segments={segments} id={ids++} />
          )
        })}
        <button className="btn-more" type="button" onClick={() => moreTickets(0)}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
      </div>
    )
  }
  return (
    <div className="tickets-container">
      { ticketArr.length > 0 ? ticketsContainer() : <LoadingSvg /> }
    </div>

  )
}
