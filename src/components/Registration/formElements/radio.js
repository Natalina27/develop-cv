//Core
import React from 'react';
import {useFormik} from 'formik';
import {initialValues} from "../initialValues";

//Styles
import '../styles.module.css';

export const Radio = ({name, label, ...props}) => {
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    });

    return (
        <>
            <label>
                <input
                    {...formik.field}
                    {...props}
                    type="radio"
                    name={name}
                    value={label}
                />
                {label}
            </label>
        </>
    )
}
