import { getWorkouts } from '../apis/workouts'
import { fetchWorkouts, SET_WORKOUTS } from './index'

const fakeDispatch = jest.fn()
beforeEach(() => {
  jest.clearAllMocks()
})

jest.mock('../apis/workouts')
const mockWord = 'banana'
getWorkouts.mockReturnValue(Promise.resolve(mockWord))

describe('fetchWorkouts', () => {
  it('dispatches setWord with a thunk', () => {
    const thunkFn = fetchWorkouts()
    return thunkFn(fakeDispatch).then(() => {
      const fakeDispatchFirstCallFirstArgument = fakeDispatch.mock.calls[0][0]
      expect(fakeDispatchFirstCallFirstArgument.type).toBe(SET_WORKOUTS)
      expect(fakeDispatchFirstCallFirstArgument.payload).toBe('banana')
      return null
    })
  })
})
