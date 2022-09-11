// need to fix the test

import reducer from './userprofile'
import { setUserProfile } from '../actions'

describe('adjective reducer', () => {
  it('sets a new adjective', () => {
    const action = setUserProfile('messy')
    const initialState = 'messy'
    const newState = reducer(initialState, action)
    expect(newState).toBe('messy')
  })
})
