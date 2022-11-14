import React, { useState } from 'react'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {

    const [Usuario, setUsuario] = useState({
        status: 'no-auth'
    })

    const iniciarSesion = () => {
        setUsuario({
            status: 'auth'
        })
    }

    const cerrarSesion = () => {
        setUsuario({
            status: 'no-auth'
        })
    }

  return (
    <AuthContext.Provider value={{ Usuario, iniciarSesion, cerrarSesion }}>
        { children }
    </AuthContext.Provider>
  )
}
