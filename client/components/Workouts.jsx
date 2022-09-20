import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWorkouts } from '../actions/index'
import Title from './Title'

// feature I want to add
// 1. hide videos, if you click watch video then it appears.
// 2. ability to choose how many reps/sets
// 3. tabata timer for workout when you click start WOD button

function Workouts() {
  const workouts = useSelector((state) => state.workouts)
  const [newWod, setNewWod] = useState([])
  const dispatch = useDispatch()

  dispatch(fetchWorkouts())

  // create a button next to workout name to add workout

  function addExercise(event) {
    setNewWod([...newWod, event.target.name])
  }

  function startWodButton() {
    if (newWod.length > 0) {
      return <button className="start-wod">Start WOD</button>
    }
  }

  function deleteWod(index) {
    setNewWod([...newWod.slice(0, index), ...newWod.slice(index + 1)])
  }

  return (
    <>
      <div>
        <Title />
      </div>
      <div className="workouts">
        {newWod.length > 0 && (
          <div className="wodList-container">
            {newWod.map((wod, index) => (
              <p key={(wod, index)}>
                {wod}
                <button className="delete-wod" onClick={() => deleteWod(index)}>
                  X
                </button>
              </p>
            ))}
            {/* make button to start workout, tabata timer starts */}
            {startWodButton()}
          </div>
        )}
        <h1 className="workouts-heading">Workouts</h1>
        <div className="workouts-contents">
          {workouts.map((workout) => (
            <span key={workout.id}>
              <h2>
                {workout.name}
                <button
                  className="workouts-btn"
                  name={`${workout.name}`}
                  onClick={(e) => {
                    addExercise(e)
                  }}
                >
                  Add this exercise
                </button>
              </h2>
              <iframe
                width="480"
                height="280"
                src={`${workout.video_url}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}

export default Workouts
