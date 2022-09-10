import { ADD_USERPROFILE } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_USERPROFILE:
      return [...state, payload]
    default:
      return state
  }
}

export default reducer
