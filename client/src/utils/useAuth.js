import { useState } from 'react'

export default function useAuth() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token')
        return tokenString
    }
    const [token, setToken] = useState(getToken())

    const loggedIn = () => {
        return token == null
    }

    return {
        loggedIn: loggedIn,
        token
    }

}