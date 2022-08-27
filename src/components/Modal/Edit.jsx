import React, { useState,useEffect } from 'react'
import './Modal.css'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Modal'
import axios from 'axios'
import {setEvenData} from 'redux/textSlice'

function Edit({editshow, setEditShow,setSlid}) {

    const identifier = useSelector(state => state.text.slidId)
    const dispatch = useDispatch()    

  useEffect(() => {
    let x = JSON.parse(localStorage.getItem("Atoken"));
    axios
      .get(`http://ejtacmalik-001-site1.btempurl.com/api/admin/Sliders/${identifier}`, {
        headers: {
          Authorization: "Bearer " + x,
        },
      })
      .then((resp) => dispatch(setEvenData(resp.data)));
  }, [identifier]);
  

  const evenSlid = useSelector(state => state.text.evenData)
  console.log(evenSlid);
  console.log(identifier);
  

  

    const handleClose = () => setEditShow(false);
    const handleShow = () => setEditShow(true);

    const handleEditModal = ()=>
    {
        // let token = JSON.parse(localStorage.getItem("Atoken"));
        // axios.get(`http://ejtacmalik-001-site1.btempurl.com/api/admin/Sliders/`,
        // {
        //   headers: {
        //     Authorization: "Bearer " + token,
        //   }
        // }).then(resp=> 
        //   {
        //     if (resp.status===204)
        //     {
        //       axios
        //       .get("http://ejtacmalik-001-site1.btempurl.com/api/admin/Sliders/getall", {
        //         headers: {
        //           Authorization: "Bearer " + token,
        //         },
        //       })
        //       .then((resp) => setSlid(resp.data))
        //       .then(()=> setEditShow(false))
        //     }
        //   }
        // )

    }

    return (
        <div>
         
         <Modal show={editshow} >
                    <div class="modal-content">
                        <Modal.Header>
                            <button onClick={()=> setEditShow(false)} type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </Modal.Header>
                        <Modal.Body class="modal-body">
                            <Formik
                             enableReinitialize={true}
                                initialValues={
                                    {
                                        maint: evenSlid&&evenSlid.mainTitle,
                                        sub: evenSlid&&evenSlid.subTitle,
                                        image: "",
                                        desc: evenSlid&&evenSlid.description
                                    }
                                }
                                onSubmit={(x) => {
                                    const formdata = new FormData();
                                    formdata.append("MainTitle", x.maint)
                                    formdata.append("SubTitle", x.sub)
                                    formdata.append("Description", x.desc)


                                    let token = JSON.parse(localStorage.getItem("Atoken"));

                                    let url = "http://ejtacmalik-001-site1.btempurl.com/api/admin/Sliders"
                                    fetch(url, {
                                        method: 'post',
                                        headers: {
                                            "Authorization": "Bearer " + token,
                                        },
                                        body: formdata,
                                    })
                                        .then(resp => {
                                            if (resp.status === 201) {
                                                setEditShow(false);
                                                let x = JSON.parse(localStorage.getItem("Atoken"));
                                                axios
                                                  .get("http://ejtacmalik-001-site1.btempurl.com/api/admin/Sliders/getall", {
                                                    headers: {
                                                      Authorization: "Bearer " + x,
                                                    },
                                                  })
                                                  .then((resp) => setSlid(resp.data));
                                            }
                                        }
                                        )

                                }}
                            >
                                <Form>

                                    <div className="slid-area">
                                        <label htmlFor="main">Main Title</label>
                                        <Field name='maint' type="text" id='main' />
                                    </div>
                                    <div className="slid-area">
                                        <label htmlFor="main">Sub Title</label>
                                        <Field name='sub' type="text" id='main' />
                                    </div>
                                    <div className="slid-area">
                                        <label htmlFor="main">Select image</label>
                                        <div className="select-file">
                                            <i class="bi bi-link-45deg"></i>
                                            <input  name='image' type="file" className='custom-file-input' accept="image/jpeg" id='main' />
                                        </div>
                                    </div>
                                    <div className="slid-area area-t">
                                        <label htmlFor="main">Description</label>
                                        <Field name='desc' className='area' as='textarea' />
                                    </div>
                                    <div className="slid-btn">
                                    <input className='sub-input' type="submit" /></div>
                                </Form>
                            </Formik>

                        </Modal.Body>
                    </div>
                
            </Modal>




        </div>
    )
}

export default Edit
