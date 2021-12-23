import React from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { registerEmailPassword } from '../actions/registerAction';
import { useDispatch } from 'react-redux';
// import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2'
import { useFormik } from 'formik';
import * as Yup from 'yup'

export const SignUp = () => {

    const dispatch = useDispatch()

    // const [values, handleInputChange, reset] = useForm({
    //     name: '',
    //     email: '',
    //     password: '',
    //     password2:''
    // }) 

    // const {name, email, password, password2} = values

    // const handleSubmit = (e) =>{
    //     e.preventDefault()
    //     if(password == password2){
    //         dispatch(registerEmailPassword(email, password, name))
    //     }else{
    //         console.log('Password are not the same')
    //     }
    //     reset()
    // }

    
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '',
          password2: '',
        },
        
        validationSchema: Yup.object().shape({
            name:Yup.string().required(),
            email:Yup.string().email().required(),
            password:Yup.string().required(),
            // password:Yup.string().required().oneOf([Yup.ref("password2")]),
            password2:Yup.string().required()
    
        }) ,
        
        onSubmit: (data) => {
          
    
          if (data.password !== data.password2 || data.password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password should be at least 6 characters and match each other.',
                
              })
          } else {
            
            dispatch(registerEmailPassword(data.email, data.password, data.name))
          }
        }
      })


    //form validation handler
    // const validate = (values) =>{
    //     let errors = {}
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //     if(!values.email){
    //         errors.email = 'Cannot be blank';
    //     }else if(!regex.test(values.email)){
    //         errors.email= 'Invalid email format'
    //     }
    //     if(!values.password){
    //         errors.password = 'Cannot be blank'
    //     }else if(values.password.length < 6){
    //         errors.password = 'Password must be more than 6 characters'
    //     }
    //     return errors;
    // }

    return (
        <>
         <div className="container-card">
            <Card>
                <Card.Body>
                    <Card.Title >Sign-Up Form</Card.Title>
                    {/* <Form onSubmit={handleSubmit}> */}
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                // value={name}
                                // onChange={handleInputChange}
                                onChange={formik.handleChange}
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                // value={email}
                                // onChange={handleInputChange}
                                onChange={formik.handleChange}
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                // value={password}
                                // onChange={handleInputChange}
                                onChange={formik.handleChange}
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                            <Form.Label>Repeat password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                name="password2"
                                // value={password2}
                                // onChange={handleInputChange}
                                onChange={formik.handleChange}
                                
                            />
                        </Form.Group>
                        <div className="container-botom">
                            <Button variant="danger" type="submit" className='btn-orange'>
                                Sign In
                            </Button>
                            <hr />
                            <span> Already have an account? <Link to="/login"> LOG IN</Link></span>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div > 
        </>
    )
}
