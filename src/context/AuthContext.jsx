/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from 'react'

export const AuthContext = createContext()

const getInitialState = () => {
  const jwt = localStorage.getItem('jwt')
  const userString = localStorage.getItem('user')
  if (jwt && userString) {
    try {
      const user = JSON.parse(userString)
      return {
        isAuthenticated: true,
        jwt,
        user
      }
    } catch (error) {
      console.error(error)
      localStorage.removeItem('jwt')
      localStorage.removeItem('user')
    }
  } else {
    return {
      isAuthenticated: false,
      jwt: null,
      user: null
    }
  }
}

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('jwt', action.payload.jwt)
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      return {
        ...state,
        isAuthenticated: true,
        jwt: action.payload.jwt,
        user: action.payload.user
      }

    case 'LOGOUT':
      localStorage.removeItem('user')
      localStorage.removeItem('jwt')
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        jwt: null
      }

    // case 'SET_LOGGED_USER':
    //   return {
    //     ...state,
    //     isAuthenticated: true,
    //     user: action.payload.user,
    //     jwt: action.payload.jwt
    //   }

    default:
      return state
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, null, getInitialState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
