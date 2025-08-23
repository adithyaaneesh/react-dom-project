import React, { Children, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ProtectedRoutes = ( { children }) => { 
  const navigator = useNavigate()
  const location = useLocation()

  useEffect(()=> {

    const token = window.localStorage.getItem('access_token')
    
    if (!token && location.pathname !== '/login' && location.pathname !== '/register') {
      navigator('/login')
    } 

    }, [location.pathname])

    return children

}

export default ProtectedRoutes
