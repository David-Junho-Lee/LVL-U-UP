import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUserProfile } from '../../client/actions/index'

function UserProfile() {
  const [newUserProfile, setNewUserProfile] = useState('')
  const dispatch = useDispatch()

  function submitUserProfile(event) {
    event.preventDefault()
    dispatch(addUserProfile(newUserProfile))
    console.log(newUserProfile)
    setNewUserProfile('')
  }

  function handleChange(event) {
    setNewUserProfile({
      ...newUserProfile,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <h2>User profile</h2>
      <div className="container">
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={handleChange}
              value={newUserProfile.name}
            ></input>
          </div>
          <div>
            <label htmlFor="height">Height:</label>
            <input
              type="text"
              name="height"
              placeholder="height"
              onChange={handleChange}
              value={newUserProfile.height}
            ></input>
          </div>
          <div>
            <label htmlFor="weight">Weight:</label>
            <input
              type="text"
              name="weight"
              placeholder="weight"
              onChange={handleChange}
              value={newUserProfile.weight}
            ></input>
          </div>
          <div>
            <label htmlFor="health_goals">Health Goals:</label>
            <input
              type="text"
              name="health_goals"
              placeholder="health goals"
              onChange={handleChange}
              value={newUserProfile.health_goals}
            ></input>
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={handleChange}
              value={newUserProfile.email}
            ></input>
          </div>
          <div>
            <input
              type="submit"
              onClick={submitUserProfile}
              value="Create User profile"
            ></input>
          </div>
        </form>
      </div>
    </>
  )
}

export default UserProfile
