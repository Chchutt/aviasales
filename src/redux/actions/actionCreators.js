import * as FilterCreators from './actionsFilter'
import * as ButtonCreators from './actionButtons'
import * as TicketCreators from './actionTickets'

export default {
  ...FilterCreators,
  ...ButtonCreators,
  ...TicketCreators,
}
