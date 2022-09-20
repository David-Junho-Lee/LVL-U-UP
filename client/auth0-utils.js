import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { updateLoggedInUser } from './actions/user'

export function useCacheUser() {
  const dispatch = useDispatch()
  const tokenInRedux = useSelector((state) =>
    Boolean(state.loggedInUser?.token)
  )

  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0()

  if (isAuthenticated && !tokenInRedux) {
    try {
      getAccessTokenSilently()
        .then((token) => {
          const userToSave = {
            auth0Id: user?.sub,
            name: user?.nickname,
            token: token,
          }
          dispatch(updateLoggedInUser(userToSave))
        })
        .catch((err) => console.err(err))
    } catch (err) {
      console.error(err)
    }
  }
}
