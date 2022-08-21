
import { ErrorMessage, useField } from 'formik';
import React from 'react'
import '../App.css'


type TextFieldProps = {
    label: string;
    name: string;
    type: string;
}

const TextField = ({ label, ...props }: TextFieldProps) => {
    
    const [field, meta] = useField(props)
    console.log("field and meta", field, " meta ", meta)
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <input 
            className={`form-control shadow-none ${meta.touched && meta.error && 'is-invali d'}`}
            {...field}{...props} 
            autoComplete="off"
             />
             <ErrorMessage component='div' className="errors" name={field.name} />
        </div>
    )
}

export default TextField