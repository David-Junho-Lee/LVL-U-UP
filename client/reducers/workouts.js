import { SET_WORKOUTS } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_WORKOUTS:
      return payload
    default:
      return state
  }
}

export default reducer
