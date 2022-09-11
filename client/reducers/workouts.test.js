import reducer from './workouts'
import { setWorkouts } from '../actions'

describe('adjective reducer', () => {
  it('sets a new adjective', () => {
    const action = setWorkouts('barbel curl')
    const initialState = 'silly'
    const newState = reducer(initialState, action)
    expect(newState).toBe('barbel curl')
  })
})
