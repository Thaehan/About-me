import NavBar from '@Components/NavBar'
import { Container } from '@mui/system'
import React from 'react'

import '@Assets/Scss/globalStyles.scss'

export default function HomeScreen() {
  return (
    <div className="container">
      <Container>
        <NavBar />
      </Container>
    </div>
  )
}
