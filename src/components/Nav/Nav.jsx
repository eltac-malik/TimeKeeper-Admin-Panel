import React, { useState } from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {

    const [resp, setResp] = useState("")
    const [nav, setNav] = useState("navs")

    return (
        <>
            <i onClick={() => {
                nav === "nav" ? setNav("rp-nav") : setNav("nav")
                resp === "" ? setResp("show-nv") : setResp("")
            }} className="fa-solid fa-bars"></i>
            <div className={`${nav}`}>
                <div className={`  ${resp}`}>
                    <div className="nav-img">
                        <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/Timekeeper-b_150x.png?v=1559116234" alt="" />
                        <i onClick={() => {
                            nav === "nav" ? setNav("rp-nav") : setNav("nav")
                            resp === "" ? setResp("show-nv") : setResp("")
                        }} className="fa-solid fa-xmark"></i>
                    </div>
                    
                </div>
                <Link to='/home' className='sidel'><span></span>Dashboard</Link>
                <Link to='/users' className='sidel'><span></span>Users</Link>
                <p className='sidel'><span></span>Products</p>
                <p className='sidel'><span></span>Categories</p>
                <p className='sidel'><span></span>Brands</p>
                <p className='sidel'><span></span>Sliders</p>
            </div>

        </>
    )
}

export default Nav
