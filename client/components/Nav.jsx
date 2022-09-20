import React from 'react'

import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <ul className="nav-list">
        <li>
          <Link to={'/dashboard'}>Dashboard</Link>
        </li>
        <li>
          <Link to={'/workouts'}>Workouts</Link>
        </li>
        <li>
          <Link to={'/statistic'}>Statistic</Link>
        </li>
        <li></li>
      </ul>
    </div>
  )
}

export default Nav
