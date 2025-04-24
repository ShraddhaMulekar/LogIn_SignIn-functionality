import './App.css'
import SignIn from './pages/SignIn'
import LogIn from './pages/LogIn'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} /> 
        <Route path="/login" element={<LogIn />} /> 
      </Routes>
    </Router>
  )
}

export default App
