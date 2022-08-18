import React, { useEffect, useState } from "react";
import "../assets/css/Users.css";
import axios from "axios";
import { Formik, Form, Field } from "formik";

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
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add user 
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <Formik
                initialValues={
                  {
                    username:"",
                    name:"",
                    surname:"",
                    email:"",
                    phoneNumber:"",
                    password:""
                  }}
                  onSubmit={(val)=>
                  {
                     let x = JSON.parse(localStorage.getItem("Atoken"));
                    axios.post("http://ejtacmalik-001-site1.btempurl.com/api/admin/Users/register",
                    {val},
                    {
                      headers:
                      {
                         Authorization: "Bearer " + x,
                      }
                    })
                    .then(resp=> console.log(resp.status))
                  }}
                >
                  <Form>
                    <div className="mod-part">
                      <label htmlFor="">Username</label>
                      <Field name='username'/>
                    </div>
                    <div className="mod-part">
                      <label htmlFor="">Name</label>
                      <Field name='name'/>
                    </div>
                    <div className="mod-part">
                      <label htmlFor="">Surname</label>
                      <Field name='surname'/>
                    </div>
                    <div className="mod-part">
                      <label htmlFor="">E-mail</label>
                      <Field name='email'/>
                    </div>
                    <div className="mod-part">
                      <label htmlFor="">Phone</label>
                      <Field name='phoneNumber'/>
                    </div>
                    <div className="mod-part">
                      <label htmlFor="">Password</label>
                      <Field name='password'/>
                    </div>
                    <input type="submit"/>
                  </Form>
                </Formik>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Add
                </button>
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