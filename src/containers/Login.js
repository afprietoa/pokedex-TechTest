import { useFormik } from 'formik';
import React from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { loginEmailPassword, loginFacebook, loginGoogle } from '../actions/loginAction';
// import { useForm } from '../hooks/useForm';

export const Login = () => {

    const dispatch = useDispatch()

    // const [values, handleInputChange, reset] = useForm({
    //     email:'',
    //     password:''
    // })
    // const {email, password} = values
    // const handleSubmit = (e) =>{
    //     e.preventDefault()
    //     reset()
    //     dispatch(loginEmailPassword(email,password))
    // }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        onSubmit: (data) => {
            console.log(data)
            dispatch(loginEmailPassword(data.email, data.password))
        }
    })

    const handleGoogleLogin = () =>{
        dispatch(loginGoogle())
    }

    const handleFacebookLogin = () =>{
        dispatch(loginFacebook())
    }


    return (
        <>
            <div className="container-card">
                <Card>
                    <Card.Body>
                        <Card.Title>Log-In Form</Card.Title>
                        {/* <Form onSubmit={handleSubmit} > */}
                        <Form onSubmit={formik.handleSubmit} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
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
                                    placeholder="Password"
                                    name="password"
                                    // value={password}
                                    // onChange={handleInputChange}
                                    onChange={formik.handleChange} 
                                />
                            </Form.Group>
                            <div className="container-botom">
                                <Button variant="danger" type="submit" className='btn-orange'>
                                    LOGIN
                                </Button>
                                {/* <span> o </span>
                                <Button variant="outline-warning" type="submit"  >
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </Button> */}
                                
                            </div>

                            <div className="auth__social-networks">
                                <p>Login with social networks</p>

                                <div
                                    className="google-btn"
                                    onClick = {handleGoogleLogin}
                                >
                                    <div className="google-icon-wrapper">
                                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                    </div>
                                    <p className="btn-text-G">
                                        <b>Sign in with google</b>
                                    </p>
                                 </div>
                                <div
                                    className="facebook-btn"
                                    onClick = {handleFacebookLogin}
                                >
                                <div className="facebook-icon-wrapper">
                                        <img className="facebook-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" alt="facebook button" />
                                    </div>
                                    <p className="btn-text-F">
                                        <b>Sign in with facebook</b>
                                    </p>
                                </div>

                            </div>

                            <hr />
                                <span> Don't have an account? <Link to="/signup"> Sign up</Link></span>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
