import { useRoutes, BrowserRouter } from 'react-router-dom'

import HomeScreen from 'src/Pages/HomeScreen'
import HelpScreen from 'src/Pages/HelpScreen'

function MainRoutes() {
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

export default function RootRoute() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  )
}
