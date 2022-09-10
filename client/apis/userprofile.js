import request from 'superagent'

const rootUrl = '/api/v1'

export function getUserProfile() {
  return request.get(rootUrl + '/userprofile').then((res) => {
    return res.body
  })
}

export function addNewUserProfile(newUserProfile) {
  return request
    .post(rootUrl + '/userprofile')
    .send(newUserProfile)
    .then((res) => {
      console.log(newUserProfile)
      return res.body
    })
}
