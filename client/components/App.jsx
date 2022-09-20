import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserProfile from './Userprofile.jsx'
import Workouts from './Workouts.jsx'
import { Route, Routes } from 'react-router-dom'
import { fetchWorkouts, fetchUser, fetchQuotes } from '../actions/'
import Home from './Home.jsx'
import Nav from './Nav.jsx'
import Title from './Title.jsx'
import Dashboard from './Dashboard'

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
      <Nav />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/userinfo" element={<UserProfile />}></Route>
          <Route eaxct path="/workouts" element={<Workouts />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
