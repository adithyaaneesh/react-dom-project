import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ProtectedRoutes = () => {


    
  const navigator = useNavigate()
  const location = useLocation()

  useEffect(()=> {

    const token = window.localStorage.getItem('access_token')
    
    if (!token && location.pathname !== '/login' && location.pathname !== '/register') {
      navigator('/login')
    } 

    }, [location.pathname])

    return <></>

}

export default ProtectedRoutes
