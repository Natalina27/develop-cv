//Core
import React from 'react';
import {useFormik} from 'formik';
import {initialValues} from "../initialValues";

//Styles
import '../styles.module.css';

export const Select = ({label, ...props}) => {
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    });

    return (
        <>
            <label htmlFor={props.id || props.name}>
                {label}
            </label>
            <select {...formik.field}{...props}/>
        </>
    )
}
