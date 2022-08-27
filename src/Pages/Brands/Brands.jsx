import React,{useEffect,useState} from 'react'
import 'assets/css/Brands.css'
import AddModal from 'Pages/Brands/BrandModal/addBrand';

function Brands() {

    const [show, setShow] = useState(false)

    return (
        <div className='brands'>
            <div className="add-brands">
            <p></p>
            <p className='new-p' onClick={()=> setShow(true)}  data-toggle="modal" data-target="#exampleModal">Create Slider</p>
            </div>
            <AddModal show={show} setShow={setShow} />
        </div>
    )
}

export default Brands
