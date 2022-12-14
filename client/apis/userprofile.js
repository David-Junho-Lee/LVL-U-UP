import request from 'superagent'

const rootUrl = '/api/v1'

export function getUserProfile() {
  return request.get(rootUrl + '/userprofile/userinfo').then((res) => {
    return res.body
  })
}

export function addNewUserProfile(newUserProfile) {
  console.log(newUserProfile)
  return request
    .post(rootUrl + '/userprofile/userinfo')
    .send(newUserProfile)
    .then((res) => {
      console.log(newUserProfile)
      return res.body
    })
}
