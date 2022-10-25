import React from 'react'
import './index.scss'

import { AppHeader } from './AppHeader'
import { SwitchTabCenter } from './SwitchTapCenter'
import { TicketsList } from './TicketsList'
import { SwitchTabLeft } from './SwitchTabLeft'

export function App(): React.ReactElement {
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
