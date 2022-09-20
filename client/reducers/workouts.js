import { SET_WORKOUTS, ADD_WOD } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_WORKOUTS:
      return payload
    case ADD_WOD:
      return [...state, payload]
    default:
      return state
  }
}

export default reducer
