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
      <h3 className="userprofile-h2">My information</h3>
      <h2 className="userprofile-h3">
        We use this information to track your calories, distance travelled,
        activeness level
      </h2>
      <div className="userprofile-container">
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              className="input-textbox"
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
              className="input-textbox"
              type="text"
              name="height"
              placeholder="height in cm"
              onChange={handleChange}
              value={newUserProfile.height}
            ></input>
          </div>
          <div>
            <label htmlFor="weight">Weight:</label>
            <input
              className="input-textbox"
              type="text"
              name="weight"
              placeholder="weight in kg"
              onChange={handleChange}
              value={newUserProfile.weight}
            ></input>
          </div>
          <div>
            <label htmlFor="health_goals">Health Goals:</label>
            <input
              className="input-textbox"
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
              className="input-textbox"
              type="text"
              name="email"
              placeholder="email"
              onChange={handleChange}
              value={newUserProfile.email}
            ></input>
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              className="input-textbox"
              type="text"
              name="age"
              placeholder="age"
              onChange={handleChange}
              value={newUserProfile.age}
            ></input>
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <input
              className="input-textbox"
              type="text"
              name="gender"
              placeholder="gender"
              onChange={handleChange}
              value={newUserProfile.gender}
            ></input>
          </div>
          <br></br>
          <div className="input-submitbutton">
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
