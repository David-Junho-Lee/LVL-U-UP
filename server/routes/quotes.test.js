import nock from 'nock'
import request from 'supertest'

import server from '../server'

test('GET /api/v1/word', () => {
  const scope = nock('https://bodybuilding-quotes1.p.rapidapi.com/')
    .get('/random-quote')
    .reply(200, { data: 'test is working' })

  return request(server)
    .get('/api/v1/quotes')
    .expect(200)
    .then((res) => {
      expect(res.body.data).toBe('test is working')
      scope.done()
    })
})
