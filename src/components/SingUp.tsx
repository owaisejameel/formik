//@ts-nocheck
import React from 'react'
import { Formik, Form } from 'formik'
import TextField from './TextField';
import * as Yup from 'yup'
// import '../App.css'



// type SignUpProps ={
//     initialValues : { firstName: string, lastName: string, email: string }
// }
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const validateSchema = Yup.object({
    firstName: Yup.string().max(15, "must be 15 character or less").required("Required"),
    lastName: Yup.string().max(20, "name must be 20 or less").required("Required"),
    email: Yup.string().email("email is invalid").required("Email Required"),
    password: Yup.string().min(6, "must be at least 6 character").required("Password Required"),
    confirmpassword: Yup.string().oneOf([Yup.ref('password'), null  ]).required("Password must match"),
})

export const SingUp = () => {


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validateSchema}
            onSubmit = {
                values => {
                    console.log("form data",values)
                }
            }>

            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">Sing Up</h1>
                    {console.log(formik)}
                    <Form>
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="Last Name" name="lastName" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmpassword" type="password" />
                        <button className='btn btn-primary mt-3' type='submit'>submit</button>
                    </Form>
                </div>
            )

            }
        </Formik>
    )
}
