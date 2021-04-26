import React from 'react'
import { Router } from '@reach/router'

import {
  Home,
  Add,
  Edit,
  NotFound,
} from 'pages'

const Routes: React.FC = () => {
  return (
    <Router>
      <Home path="/" />
      <Add path="/add" />
      <Edit path="/edit/:id" />
      <NotFound default />
    </Router>
  )
}

export default Routes