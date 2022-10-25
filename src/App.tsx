import React, { useEffect } from 'react'

import './index.scss'

import { AppHeader } from './components/AppHeader'
import { SwitchTabCenter } from './components/SwitchTapCenter'
import { TicketsList } from './components/TicketsList'
import { SwitchTabLeft } from './components/SwitchTabLeft'
import { useTicketActions } from './hooks/useActions'

export const App = () => {
  const { fetchId } = useTicketActions()
  useEffect(() => {
    fetchId()
  }, [])
  return (
    <div className="app">
      <AppHeader />
      <section className="tabs">
        <SwitchTabLeft />
        <SwitchTabCenter />
      </section>
      <TicketsList />
    </div>
  )
}
