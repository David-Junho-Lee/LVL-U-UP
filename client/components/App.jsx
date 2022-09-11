import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserProfile from './Userprofile.jsx'
import Workouts from './Workouts.jsx'
import { Route, Routes, Link } from 'react-router-dom'
import { fetchWorkouts, fetchUser, fetchQuotes } from '../actions/'

function App() {
  const workouts = useSelector((state) => state.workouts)
  // const user = useSelector((state) => state.user)
  const quotes = useSelector((state) => state.quotes)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchWorkouts())
    dispatch(fetchQuotes())
  }, [])
  console.log(workouts)
  console.log(quotes)

  return (
    <>
      <div className="app">
        <h1 className="app-heading">
          <span className="LVLUUP-L1">L</span>
          <span className="LVLUUP-V">V</span>
          <span className="LVLUUP-L2">L</span>
          <span className="LVLUUP-U1">U</span>
          <span className="LVLUUP-U2">U</span>
          <span className="LVLUUP-P">P</span>
        </h1>
        <p className="app-welcomemessage">
          <b>
            Welcome to <span className="LVLUUP-L1">L</span>
            <span className="LVLUUP-V">V</span>
            <span className="LVLUUP-L2">L</span>
            <span className="LVLUUP-U1">U</span>
            <span className="LVLUUP-U2">U</span>
            <span className="LVLUUP-P">P</span>
            <br></br>
            App that can help you level up your fitness
          </b>
        </p>
        <img src="/images/levelup.jpg"></img>
        {/* <p>{quotes.quote}</p> */}
        <div>
          <Link to={'/userinfo'}>
            <button className="btn">
              <span>Get started</span>
            </button>
          </Link>
        </div>
        <div>
          <Link to={'/workouts'}>
            <button className="btn">
              <span>Workouts</span>
            </button>
          </Link>
        </div>
        <div>
          <Routes>
            <Route path="/userinfo" element={<UserProfile />}></Route>
            <Route path="/workouts" element={<Workouts />}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
