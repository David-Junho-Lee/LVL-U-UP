import request from 'superagent'

const rootUrl = '/api/v1'

export function getWorkouts() {
  return request.get(rootUrl + '/workouts').then((res) => {
    return res.body.workouts
  })
}
