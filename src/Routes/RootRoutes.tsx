import { useRoutes, BrowserRouter } from 'react-router-dom'

import HomeScreen from '@Screens/Home'
import HelpScreen from '@Screens/Help'
import Footer from '@Components/Footer'
import Header from '@Components/Header'

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
      <Header />
      <MainRoutes />
      <Footer />
    </BrowserRouter>
  )
}
