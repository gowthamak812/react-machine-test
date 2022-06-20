import React from "react";
import '../Sass/form.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";

const validate = values => {
    var errors = {};
    if (!values.email) {
        errors.email = "Email is required"
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = "Password is required"
    } else if (
        !/^[A-Z0-9.!@#$%^&*()_+=-?><":}{,./?;']+[A-Z0-9.!@#$%^&*()_+=-?><"[:}{,./?;']{8,}$/i.test(values.password)
    ) {
        errors.password = 'Password must be six Charector';
    }
    return errors;
}

function Form() {
    const validEmail = "gowtham.a@starberry.tv";
    const validPassword = "starberry@123";
    var navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: (userInputData) => {
            let givenValue = userInputData && userInputData.email === validEmail &&
                userInputData && userInputData.password === validPassword;
            console.log(Boolean(givenValue))
            if (Boolean(givenValue) === true) {
                navigate("/property", { replace: true })
            } else {
                alert("Invalid username or Password")
            }
        }
    })

    return (
        <>
            <div class="container mt-5 position-relative">
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <div class="App mx-auto">
                        <div class="form-group ">
                            <h2>Sign In</h2> <br />
                            <label>Email :</label>
                            <input
                                type="email"
                                class="form-control"
                                id="email"
                                placeholder="Enter email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.errors.email ? <div class="text-danger">{formik.errors.email}</div> : null}
                        </div>
                        <div class="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                class="form-control"
                                id="pwd"
                                placeholder="Enter password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.errors.password ? <div class="text-danger">{formik.errors.password}</div> : null}
                        </div>
                        <br />
                        <div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Form;