import request from 'superagent'

const rootUrl = '/api/v1'

export function getQuotes() {
  return request.get(rootUrl + '/quotes').then((res) => {
    return res.body
  })
}
