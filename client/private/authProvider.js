import { useState } from 'react';
const jwt = require("jsonwebtoken")

export default function authProvider() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };
    const [token, setToken] = useState(getToken());

    const loggedIn = () => {
        return token == null
    }

    return {
        loggedIn: loggedIn
    }

}