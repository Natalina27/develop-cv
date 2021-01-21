import React from 'react';
import {Formik, Form} from 'formik';
import {initialValues} from './initialValues';

//Form elements
import {TextInput} from './formElements/textInput';
import {Select} from './formElements/select';
import {Radio} from "./formElements/radio";

export const Registration = () => {
    const print = (values) => {
        console.log(values);
    }

    return (
        <section>
            <h1>Registration</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={print}
            >
                <Form>
                    <TextInput
                        label='First Name'
                        name='firstName'
                        type='text'
                        placeholder='Put your name here'
                    >
                    </TextInput>
                    <TextInput
                        label='Surname'
                        name='surname'
                        type='text'
                        placeholder='Put your surname here'
                    >
                    </TextInput>
                    <TextInput
                        label='Age'
                        name='age'
                        type='number'
                        placeholder='Put your age here'
                    >
                    </TextInput>
                    <TextInput
                        label='Email Adress'
                        name='email'
                        type='email'
                        placeholder='Put your email here'
                    >
                    </TextInput>

                    <div className='radio-title'>
                        Sex:
                        <div className='radio-group'>
                            <Radio label='Male' name='sex'/>
                            <Radio label='Female' name='sex'/>
                        </div>
                    </div>

                    <Select
                        label='Speciality: '
                        name='speciality'
                    >
                        <option value="">Select your speciality</option>
                        <option value="designer">FrontEnd</option>
                        <option value="developer">BackEnd</option>
                        <option value="writer">FullStack</option>
                    </Select>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </Form>
            </Formik>
        </section>
    )
}

