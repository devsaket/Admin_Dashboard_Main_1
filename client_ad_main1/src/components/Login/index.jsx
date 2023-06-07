import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'


const Login = () => {
    let navigate = useNavigate();
    const initialValues = { email: "", password: "" };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
        console.log(formValues);
    };


    //input change handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    //form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    //form validation handler
    const validate = (values) => {
        let errors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
        const passwordRegex = /^[A-Za-z0-9_]\w{8,20}$/


        if (!values.email) {
            errors.email = "Cannot be blank";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if (!values.password) {
            errors.password = "Password cannot be blank";
        } else if (!((values.password).length >= 8 && (values.password).length <= 20)) {
            errors.password = "Password must be of 8 - 20 characters";
        } 

        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submit();
        }
    }, [formErrors, isSubmitting]);


    return (
        <>
            <Container fluid className="bg-color1">
                <Row xs='12' sm='12' md='6' lg='4' xl='4' className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                    <Col className='bg-light p-4 rounded-4'>
                        <h1 className='fs-1 text-center mb-3 text-decoration-underline'>Login</h1>

                        <Form onSubmit={handleSubmit} noValidate method="POST">
                            <Form.Group className="mb-3" controlId="loginForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="name@example.com" value={formValues.email} onChange={handleChange} className={formErrors.email && "input-error"} />
                                {formErrors.email && (<span className="error text-danger">{formErrors.email}</span>)}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="loginForm.ControlInput2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="********" value={formValues.password} onChange={handleChange} className={formErrors.password && "input-error"} />
                                {formErrors.password && (<span className="error text-danger">{formErrors.password}<br /></span>)}
                            </Form.Group>
                            <div className='d-grid'><Button type="submit">Login</Button></div>
                        </Form>

                        <hr className='muted mt-4' />
                        <p className='text-center my-0'><Link to="/login" className='mx-2 text-decoration-none'>Forgot Password</Link></p>
                        <p className='text-center'>Not a member <Link to="/signup" className='mx-2 fw-bold text-decoration-none btn btn-outline-primary mt-2'>Sign Up</Link></p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login