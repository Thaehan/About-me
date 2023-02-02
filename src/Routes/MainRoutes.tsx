import React, { useContext } from 'react'
import { useRoutes, Navigate, Route, Routes } from 'react-router-dom'

import HomeScreen from 'src/Pages/HomeScreen'
import HelpScreen from 'src/Pages/HelpScreen'
import { AuthContext } from '@Contexts/AuthProvider'

export default function MainRoutes() {
  const { isLogin } = useContext(AuthContext)
  const allMainRoutes = useRoutes([
    {
      path: '/',
      element: <HomeScreen />,
    },
    {
      path: '/help',
      element: <HelpScreen />,
    },
  ])

  return allMainRoutes
}
