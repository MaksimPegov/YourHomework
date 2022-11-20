import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AnimationRoutes } from './AnimationRoutes'

export const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimationRoutes />
      </BrowserRouter>
    </div>
  )
}

