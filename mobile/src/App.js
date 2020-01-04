import React from 'react'
import { useSelector } from 'react-redux'
import createRouter from './Routes'

import SignIn from '../src/pages/SignIn'

export default function App() {
  // const signed = useSelector(state => state.auth.signed)
const signed = true
  const Routes = createRouter(signed)

  return <Routes />
  //return <SignIn />
}
