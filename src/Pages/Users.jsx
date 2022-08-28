import React, { useEffect, useState } from "react";
import "../assets/css/Users.css";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import userVal from 'validation/userValidation'

function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    let x = JSON.parse(localStorage.getItem("Atoken"));
    axios
      .get("http://ejtacmalik-001-site1.btempurl.com/api/admin/Users/getall", {
        headers: {
          Authorization: "Bearer " + x,
        },
      })
      .then((resp) => setUser(resp.data));
  }, []);

  return (
    <div className="users">
      <div className="add-user">
        <p></p>
        <button
          type="button"
          className="mod-btn btn"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add new user
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add user 
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Formik
                initialValues={
                  {
                    Username:"",
                    Name:"",
                    Surname:"",
                    Email:"",
                    PhoneNumber:"",
                    Password:"",
                    isAdmin:"false"
                  }}
                  validationSchema={userVal}
                  onSubmit={(val)=>
                  {
                    console.log(val);
                    
                     let x = JSON.parse(localStorage.getItem("Atoken"));
                    axios.post("http://ejtacmalik-001-site1.btempurl.com/api/admin/Users/register",                             
                    {
                      ...val,isAdmin:val.isAdmin==='true'?true:false
                    },
                    {
                      headers:
                      {
                         Authorization: "Bearer " + x,
                         "Content-Type":"application/json"

                      }
                    })
                    .then(resp=> console.log(resp.status))
                  }}
                >
                {
                  ({errors,touched})=>
                  (
                    
                  <Form>
                  <div className="mod-part">
                    <label htmlFor="" className='add-lbl'>Username {errors.Username&&touched.Username? <div className='add-err'><i className="fa-solid fa-circle-exclamation"></i></div>:null}</label>
                    <Field name='Username' placeholder='8 length 1 Upper 1 symbol'/>
                  </div>
                  <div className="mod-part">
                    <label htmlFor=""  className='add-lbl'>Name  {errors.Name&&touched.Name? <div className='add-err'><i className="fa-solid fa-circle-exclamation"></i></div>:null}</label>
                    <Field name='Name'/>  
                  </div>
                  <div className="mod-part">
                    <label htmlFor=""  className='add-lbl'>Surname {errors.Surname&&touched.Surname? <div className='add-err'><i className="fa-solid fa-circle-exclamation"></i></div>:null}</label>
                    <Field name='Surname'/>
                  </div>
                  <div className="mod-part">
                    <label htmlFor="" className='add-lbl'>E-mail {errors.Email&&touched.Email? <div className='add-err'><i className="fa-solid fa-circle-exclamation"></i></div>:null}</label>
                    <Field name='Email'/>
                  </div>
                  <div className="mod-part">
                    <label htmlFor="" className='add-lbl'>Phone {errors.PhoneNumber&&touched.PhoneNumber? <div className='add-err'><i className="fa-solid fa-circle-exclamation"></i></div>:null}</label>
                    <Field name='PhoneNumber'/>
                  </div>
                  <div className="mod-part">
                    <label htmlFor="" className='add-lbl'>Password {errors.Password&&touched.Password? <div className='add-err'><i className="fa-solid fa-circle-exclamation"></i></div>:null}</label>
                    <Field name='Password'/>
                  </div>
                  <div className="mod-part">
                    <label htmlFor="" className='add-lbl'>Admin {errors.isAdmin&&touched.isAdmin? <div className='add-err'><i className="fa-solid fa-circle-exclamation"></i></div>:null}</label>
                    <Field type='radio' name='isAdmin' value='true'/>
                  </div>
                  <div className="btns-mod">
                  
                  <input className='btn add' type="submit"/>
                  <button
                type="button"
                className="btn cls"
                data-dismiss="modal"
              >
                Close
              </button>
              </div>
                </Form>
                  )
                }
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="table-cont">
        <table className="table">
          <thead>
            <tr>
              <th className="tr-title" scope="col">
                Name/Surname
              </th>
              <th className="tr-title" scope="col">
                Username
              </th>
              <th className="tr-title" scope="col">
                E-mail
              </th>
              <th className="tr-title" scope="col">
                Phone
              </th>
              <th className="tr-title" scope="col">
                More
              </th>
            </tr>
          </thead>
          <tbody className="bdy">
            {user &&
              user.map((e) => {
                return (
                  <tr>
                    <th scope="row">
                      {e.name} {e.surName}
                    </th>
                    <td>{e.userName}</td>
                    <td>{e.email}</td>
                    <td>{e.phoneNumber}</td>
                    <td className="det">Details</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
