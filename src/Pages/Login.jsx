import React from 'react'
import '../assets/css/Login.css'
import {Formik,Form,Field} from 'formik'
import axios from 'axios';


function Login() {
    return (
        <div className='login'>
            
            <div className="lg-form">
                <Formik
                initialValues={{
                    username:""
                }}
                onSubmit={(x)=>
                {
                    console.log(x)
                }}
                >
                    <Form className='form'>
                        <div className="lg-l">
                        <label htmlFor="usr">Username</label>
                        <Field name='username' id='usr'/>
                        </div>
                        <div className="lg-l">
                        <label htmlFor="usr">Password</label>
                        <Field name='password' type='password' id='usr'/>
                        </div>
                        <input type="submit" value='Submit'/>
                    </Form>
                </Formik>
            </div>

        </div>
    )
}

export default Login
