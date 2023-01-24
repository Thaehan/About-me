import React, { useContext } from 'react'
import { useRoutes, Navigate, Route, Routes } from 'react-router-dom'

import HomeScreen from '@Screens/HomeScreen'
import HelpScreen from '@Screens/HelpScreen'
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
