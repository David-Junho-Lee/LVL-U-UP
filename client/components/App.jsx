import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserProfile from './Userprofile.jsx'
import Workouts from './Workouts.jsx'
import { Route, Routes, Link } from 'react-router-dom'
import { fetchWorkouts, fetchUser, fetchQuotes } from '../actions/'
import Home from './Home.jsx'

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
        <p>{quotes.quote}</p>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/userinfo" element={<UserProfile />}></Route>
            <Route path="/workouts" element={<Workouts />}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
