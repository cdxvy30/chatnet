import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

const App = () => {

  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
