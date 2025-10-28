/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Profile = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { state, dispatch } = useContext(AuthContext)

  useEffect(() => {
    var tokenFromUrl = searchParams.get('login_info')
    if (tokenFromUrl) {
      try {
        const loginData = JSON.parse(tokenFromUrl)
        dispatch({
          type: 'LOGIN',
          payload: { jwt: loginData.jwt, user: loginData.user }
        })
        navigate('/profile', { replace: true })
      } catch (error) {
        console.error(error)
      }
    }
  }, [searchParams])

  const user = state.user !== null ? state.user : {}

  return (
    <div>
      Profile
      <h3>falopa </h3>
      <h4>{user.sub}</h4>
    </div>
  )
}

export default Profile
