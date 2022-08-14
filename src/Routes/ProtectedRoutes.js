import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom';


function ProtectedRoutes()
{

    let x = false

    return x ==true ? <Outlet/> : <Navigate to='/'/>
}

export default ProtectedRoutes
