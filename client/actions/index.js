import { getUser } from '../apis/user'
import { getWorkouts, addWodToList } from '../apis/workouts'
import { getQuotes } from '../apis/quotes'
import { getUserProfile, addNewUserProfile } from '../apis/userprofile'

export const SET_USER = 'SET_USER'
export const SET_WORKOUTS = 'SET_WORKOUTS'
export const SET_QUOTES = 'SET_QUOTES'
export const ADD_USERPROFILE = 'ADD_USERPROFILE'
export const ADD_WOD = 'ADD_WOD'
export const SET_WOD = 'SET_WOD'

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  }
}

export function addWod(wod) {
  return {
    type: ADD_WOD,
    payload: wod,
  }
}

export function setWod(wod) {
  return {
    type: SET_WOD,
    payload: wod,
  }
}

export function setWorkouts(workouts) {
  return {
    type: SET_WORKOUTS,
    payload: workouts,
  }
}

export function fetchUser() {
  return (dispatch) => {
    return getUser().then((user) => {
      dispatch(setUser(user))
    })
  }
}

export function fetchWorkouts() {
  return (dispatch) => {
    return getWorkouts().then((workouts) => {
      dispatch(setWorkouts(workouts))
    })
  }
}

export function addNewWodToList(newWod) {
  return (dispatch) => {
    return addWodToList(newWod)
      .then((wod) => {
        dispatch(addWod(wod))
      })
      .catch((e) => {
        console.error(e)
      })
  }
}

export function setQuotes(quotes) {
  return {
    type: SET_QUOTES,
    payload: quotes,
  }
}

export function fetchQuotes() {
  return (dispatch) => {
    return getQuotes().then((quotes) => {
      dispatch(setQuotes(quotes))
    })
  }
}

export function setUserProfile(profile) {
  return {
    type: 'SET_USERPROFILE',
    payload: profile,
  }
}

export function fetchUserProfile() {
  return (dispatch) => {
    return getUserProfile().then((profile) => {
      dispatch(setUserProfile(profile))
    })
  }
}

export function addUserProfile(newUserProfile) {
  return (dispatch) => {
    console.log(newUserProfile)
    return addNewUserProfile(newUserProfile)
      .then((profile) => {
        console.log(profile)
        dispatch(setUserProfile(profile))
        return null
      })
      .catch((e) => {
        console.error(e)
      })
  }
}
