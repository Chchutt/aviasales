import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import ActionCreators from '../redux/actions/actionCreators'

export const useTicketActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionCreators, dispatch)
}
