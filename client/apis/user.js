import request from 'superagent'

const rootUrl = '/api/v1'

export function getUser() {
  return request.get(rootUrl + '/user').then((res) => {
    return res.body
  })
}
