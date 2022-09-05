import React, { useEffect, useState } from 'react'
import 'assets/css/Brands.css'
import axios from 'axios'
import AddModal from 'Pages/Brands/BrandModal/addBrand';
import Edit from 'Pages/Brands/BrandModal/editModal'
import Remove from 'Pages/Brands/BrandModal/editModal'
import { useDispatch } from 'react-redux'
import { setText, setId } from 'redux/textSlice'

function Brands() {

    const [show, setShow] = useState(false)
    const [products, setProducts] = useState([])
    const [modEdit,setModEdit] = useState(false)
    const [remshow, setRemShow] = useState(false)
    const dispatch = useDispatch()


    useEffect(() => {
        let x = JSON.parse(localStorage.getItem("Atoken"));
        axios
            .get("http://ejtacmalik-001-site1.btempurl.com/api/admin/Products/getall", {
                headers: {
                    Authorization: "Bearer " + x,
                },
            })
            .then((resp) => setProducts(resp.data));
    }, [])

    console.log(products);

    const handleRemove = (e) => {
        dispatch(setText(e))
        setRemShow(true)
    
      }
    
      

    return (
        <div className='brands'>
            <div className="add-brands">
                <h1>Products</h1>
                <p className='new-p' onClick={() => setShow(true)} data-toggle="modal" data-target="#exampleModal">Create Slider</p>
            </div>
        <AddModal show={show} setShow={setShow} setProducts={setProducts} />




            <div className="slider-list">
                <div className="slid-head">
                    <p>id</p>
                </div>
                {
                    products && products.map(e => {
                        return (
                            <div key={e.id} className="slid-one">
                                <p>{e.id}</p>
                                <p>{e.name}</p>
                                <div className="func-btn">
                                    <p className='slid-edit' onClick={() => {
                                        setModEdit(true)
                                        dispatch(setId(e.id))
                                    }}>edit</p>
                                    <p onClick={() => handleRemove(e)} className='slid-del'>delete</p>
                                    <Remove remshow={remshow} setRemShow={setRemShow} setProducts={setProducts} />
                                    <Edit modEdit={modEdit} setModEdit={setModEdit} setProducts={setProducts} /> 
                                </div>
                            </div>
                        )
                    })
                }
            </div>














        </div>
    )
}

export default Brands
