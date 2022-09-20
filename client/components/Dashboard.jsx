import Title from './Title'
import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <div>
        <Title />
      </div>
      <div>
        <ul className="dashboard-nav-list">
          <li>
            <Link to={'/dashboard/profile'}>Profile</Link>
          </li>
          <li>
            <Link to={'/dashboard/settings'}>Settings</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Dashboard
