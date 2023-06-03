import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

const SignUp = () => {
    let navigate = useNavigate();
    const initialValues = { firstName: '', lastName: '', email: "", mobile: "", password: "", password2: "" };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
        console.log(formValues);

        const fvalues = { firstName: formValues.firstName, lastName: formValues.lastName, email: formValues.email, mobile: formValues.mobile, password: formValues.password }
        console.log(fvalues)

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

        const firstNameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
        const lastNameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
        const mobileRegex = /^[6789]\d{9}$/
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        const passwordRegex = /^[A-Za-z0-9_]\w{8,20}$/

        
        if (!values.firstName) {
            errors.firstName = "First Name cannot be blank";
        } else if (values.firstName.length < 1) {
            errors.firstName = "First Name must be more than 1 character";
        } else if (!firstNameRegex.test(values.firstName)) {
            errors.email = "Invalid First Name format";
        }

        if (!values.lastName) {
            errors.lastName = "Last Name cannot be blank";
        } else if (values.lastName.length < 1) {
            errors.lastName = "Last Name must be more than 1 character";
        } else if (!lastNameRegex.test(values.lastName)) {
            errors.email = "Invalid Last Name format";
        }


        if (!values.email) {
            errors.email = "Email Address cannot be blank";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if (!values.mobile) {
            errors.mobile = "Mobile No. cannot be blank";
        } else if (values.mobile.length < 10) {
            errors.mobile = "Mobile No. must be of 10 characters";
        } else if (!mobileRegex.test(values.mobile)) {
            errors.mobile = "Invalid Mobile No. format";
        }

        if (!values.password) {
            errors.password = "Password cannot be blank";
        } else if (!((values.password).length >= 8 && (values.password).length <= 20)) {
            errors.password = "Password must be of 8 - 20 characters";
        } else if (!passwordRegex.test(values.password)) {
            errors.password = "Invalid Password format";
        }

        if (!values.password2) {
            errors.password2 = "Confirm Password cannot be blank";
        } else if (!((values.password2).length >= 8 && (values.password2).length <= 20)) {
            errors.password2 = "Password must be of 8 - 20 characters";
        } else if (!(passwordRegex.test(values.password2) && values.password === values.password2)) {
            errors.password2 = "Invalid Password ";
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
                        <h1 className='fs-1 text-center mb-3 text-decoration-underline'>Sign Up</h1>

                        <Form onSubmit={handleSubmit} noValidate>
                            <Form.Group className="mb-3" controlId="signupForm.ControlInput1">
                                <Form.Label>FirstName</Form.Label>
                                <Form.Control type="text" name="firstName" placeholder="James" value={formValues.firstName} onChange={handleChange} className={formErrors.firstName && "input-error"} />
                                {formErrors.firstName && (<span className="error text-danger">{formErrors.firstName}</span>)}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="signupForm.ControlInput2">
                                <Form.Label>LastName</Form.Label>
                                <Form.Control type="text" name="lastName" placeholder="Bond" value={formValues.lastName} onChange={handleChange} className={formErrors.lastName && "input-error"} />
                                {formErrors.lastName && (<span className="error text-danger">{formErrors.lastName}</span>)}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="signupForm.ControlInput3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="name@example.com" value={formValues.email} onChange={handleChange} className={formErrors.email && "input-error"} />
                                {formErrors.email && (<span className="error text-danger">{formErrors.email}</span>)}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="signupForm.ControlInput4">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control type="text" name="mobile" placeholder="00000 00000" value={formValues.mobile} onChange={handleChange} className={formErrors.mobile && "input-error"} />
                                {formErrors.mobile && (<span className="error text-danger">{formErrors.mobile}</span>)}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="signupForm.ControlInput5">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="********" value={formValues.password} onChange={handleChange} className={formErrors.password && "input-error"} />
                                {formErrors.password && (<span className="error text-danger">{formErrors.password}<br /></span>)}
                                <Form.Text muted className='small'>
                                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="signupForm.ControlInput6">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" name="password2" placeholder="********" value={formValues.password2} onChange={handleChange} className={formErrors.password2 && "input-error"} />
                                {formErrors.password2 && (<span className="error text-danger">{formErrors.password2}<br /></span>)}
                            </Form.Group>
                            <Button type="submit">Sign Up</Button>
                        </Form>

                        <p className='mt-5 text-center'>Already a member <Link to="/login" className='mx-2 fw-bold text-decoration-none'>Login</Link></p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SignUp