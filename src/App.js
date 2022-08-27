import {useEffect} from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import {Routes,Route,useLocation} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ProtectedRoutes from './Routes/ProtectedRoutes'
import {useDispatch} from 'react-redux'
import {setLog} from './redux/loginSlice'
import Sliders from './Pages/Slider'
import Users from 'Pages/Users';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>
  {

    if (JSON.parse(localStorage.getItem("route")) === null)
    {
      localStorage.setItem("route",JSON.stringify(false))
      dispatch(setLog(JSON.parse(localStorage.getItem("route"))))
    }
    else
    {
      dispatch(setLog(JSON.parse(localStorage.getItem("route"))))
    }

  },[])

  let loc = useLocation();

  return (
    <div className="App">

      {loc.pathname !== "/"?<Nav/>:null} 
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route element={<ProtectedRoutes/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/slider' element={<Sliders/>}/>
          </Route>
        </Routes>
    
    </div>
  );
}

export default App;
