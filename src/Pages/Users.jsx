import React,{useEffect,useState} from 'react'
import '../assets/css/Users.css'
import axios from 'axios'


function Users() {

    const [user,setUser] = useState([])

    useEffect(()=>
    {
        axios.get("http://ejtacmalik-001-site1.btempurl.com/api/admin/Users/getall")
        .then(resp=> setUser(resp.data))

    },[])

    console.log(user);
    

    return (
        <div className='users'>
            <table className="table">
  <thead>
    <tr>
      <th className='tr-title' scope="col">#</th>
      <th className='tr-title' scope="col">First</th>
      <th className='tr-title' scope="col">Last</th>
      <th className='tr-title' scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default Users
