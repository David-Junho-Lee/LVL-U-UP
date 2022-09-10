import { SET_QUOTES } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_QUOTES:
      return payload
    default:
      return state
  }
}

export default reducer
