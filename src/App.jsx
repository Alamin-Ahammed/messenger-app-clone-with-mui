import './App.css'
import { useAuthInfo } from './Context/authContext/useAuthInfo';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';

function App() {
  const {authInfo} = useAuthInfo();
  return authInfo?.uid ? <Home /> : <Login />
}

export default App
