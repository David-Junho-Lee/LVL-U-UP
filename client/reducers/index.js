import { combineReducers } from 'redux'

import user from './user'
import workouts from './workouts'
import quotes from './quotes'
import userprofile from './userprofile'

export default combineReducers({
  userprofile,
  quotes,
  workouts,
  user,
})
