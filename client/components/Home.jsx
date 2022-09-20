import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserProfile from './Userprofile.jsx'
import Workouts from './Workouts.jsx'
import { Route, Routes, Link } from 'react-router-dom'
import { fetchWorkouts, fetchUser, fetchQuotes } from '../actions/'
import Title from './Title'
import WelcomeMessage from './WelcomeMessage.jsx'

function Home() {
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
      <Title />
      <WelcomeMessage />
      <div className="app">
        <img src="/images/levelup.jpg"></img>
        {/* <p>{quotes.quote}</p> */}
        <div>
          <Link to={'/userinfo'}>
            <button className="btn">
              <span>Get started</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
