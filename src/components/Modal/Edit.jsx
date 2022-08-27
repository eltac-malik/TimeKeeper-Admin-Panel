import React, { useState } from 'react'
import './Modal.css'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Modal'


function Edit({editshow, setEditShow,setSlid}) {


    const handleClose = () => setEditShow(false);
    const handleShow = () => setEditShow(true);

    const handleEditModal = ()=>
    {
        let token = JSON.parse(localStorage.getItem("Atoken"));
        axios.delete(`http://ejtacmalik-001-site1.btempurl.com/api/admin/Sliders/`,
        {
          headers: {
            Authorization: "Bearer " + token,
          }
        }).then(resp=> 
          {
            if (resp.status===204)
            {
              axios
              .get("http://ejtacmalik-001-site1.btempurl.com/api/admin/Sliders/getall", {
                headers: {
                  Authorization: "Bearer " + token,
                },
              })
              .then((resp) => setSlid(resp.data))
              .then(()=> setEditShow(false))
            }
          }
        )

    }

    return (
        <div>
                        <Modal show={editshow} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>Are you sure delete <strong>salam</strong> slider?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleEditModal()  }>Delete </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Edit
