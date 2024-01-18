import './App.css'
import { useAuthContext } from './Context/authContext/AuthContext'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';

function App() {
  const isAuthLoggedIn = useAuthContext();
  return isAuthLoggedIn ? <Home /> : <Login />
}

export default App
