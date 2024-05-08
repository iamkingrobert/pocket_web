import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
// import LoginPage from './Pages/LoginPage'

function App() {


  return (
    <Router>
    <Dashboard/> 
    </Router>
    // <LoginPage/>
  )
}

export default App
