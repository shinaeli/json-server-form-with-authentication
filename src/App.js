import React from 'react'
import {Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import WelcomePage from './components/WelcomePage'
import SignIn from './components/SignIn'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App