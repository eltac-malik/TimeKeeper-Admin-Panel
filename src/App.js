import './App.css';
import Nav from './components/Nav/Nav'
import {Routes,Route,useLocation} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ProtectedRoutes from './Routes/ProtectedRoutes'

function App() {

  let loc = useLocation();

  return (
    <div className="App">

      {loc.pathname !== "/" && loc.pathname !== '/register'?<Nav/>:null} 
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route element={<ProtectedRoutes/>}>
          <Route path='/home' element={<Home/>}/>
          </Route>
        </Routes>
    
    </div>
  );
}

export default App;
