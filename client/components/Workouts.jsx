import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWorkouts } from '../actions/index'

function Workouts() {
  const workouts = useSelector((state) => state.workouts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchWorkouts())
  }, [])

  return (
    <>
      <div className="workouts">
        <h1 className="workouts-heading">Workouts</h1>
        <div>
          {workouts.map((workout) => (
            <h2 key={workout.name}>
              <a href={`${workout.video_url}`}>
                <b>{workout.name}</b>
              </a>
            </h2>
          ))}
        </div>
      </div>
    </>
  )
}

export default Workouts
