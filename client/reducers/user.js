import { SET_USER } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_USER:
      return payload
    default:
      return state
  }
}

export default reducer
