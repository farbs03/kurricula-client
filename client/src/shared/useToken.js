import { useState } from 'react'

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token')
    return tokenString
  }
  const [token, setToken] = useState(getToken())
  
  const saveToken = userToken => {
    localStorage.setItem('token', userToken)
    setToken(userToken)
  }

  //add valid token logic
  const validToken = () => {
    return token!=null
  }
  
  return {
    setToken: saveToken,
    token: token,
    validToken
  }

}