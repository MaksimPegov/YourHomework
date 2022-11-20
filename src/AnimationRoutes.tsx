import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Login } from './login/Login'
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Registation } from './registration/Registation'

export const AnimationRoutes: React.FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <div className="AnimationRoutes">
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registation />}></Route>
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </AnimatePresence>
  )
}

