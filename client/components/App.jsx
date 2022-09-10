import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserProfile from './Userprofile.jsx'
import {
  fetchWorkouts,
  fetchUser,
  fetchQuotes,
  fetchUserProfile,
} from '../actions/'

function App() {
  const workouts = useSelector((state) => state.workouts)
  const user = useSelector((state) => state.user)
  const quotes = useSelector((state) => state.quotes)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchWorkouts())
    dispatch(fetchQuotes())
    // dispatch(fetchUserProfile())
  }, [])
  console.log(quotes)
  console.log(user)
  console.log(workouts)

  return (
    <>
      <div className="app">
        <h1>
          <span className="LVLUUP-L1">L</span>
          <span className="LVLUUP-V">V</span>
          <span className="LVLUUP-L2">L</span>
          <span className="LVLUUP-U1"> U</span>
          <span className="LVLUUP-U2"> U</span>
          <span className="LVLUUP-P">P</span>
        </h1>
        <p>{quotes.quote}</p>
        <div>
          <UserProfile></UserProfile>
        </div>
        {/* <ul>
          {user.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul> */}
        <ul>
          {workouts.map((workout) => (
            <li key={workout}>{workout}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
