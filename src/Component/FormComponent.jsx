import React, { useState } from 'react';

const SignUpForm = () => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!formValues.firstName) errors.firstName = 'First name is required';
        if (!formValues.lastName) errors.lastName = 'Last name is required';
        if (!formValues.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!formValues.password) errors.password = 'Password is required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            setFormErrors({});
            // Handle form submission (e.g., send data to API)
            console.log('Form submitted:', formValues);
        }
    };

    return (

        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow" style={{ width: '25rem' }}>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <h2 className='text-center'>Sign Up</h2>
                        <div className="form-group mt-2">
                            <label className='text-center d-block py-2' htmlFor="firstName">First Name:</label>
                            <input
                                type='text'
                                name='firstName'
                                id='firstName'
                                className="form-control mt-2"
                                placeholder='First Name'
                                value={formValues.firstName}
                                onChange={handleChange}
                            />
                            {formErrors.firstName && <small className="text-danger">{formErrors.firstName}</small>}
                        </div>
                        <div className="form-group mt-2">
                            <label className='text-center d-block py-2' htmlFor="lastName">Second Name</label>
                            <input
                                type='text'
                                name='lastName'
                                id='lastName'
                                className="form-control mt-2"
                                placeholder='Second Name'
                                value={formValues.lastName}
                                onChange={handleChange}
                            />
                            {formErrors.lastName && <small className="text-danger">{formErrors.lastName}</small>}
                        </div>
                        <div className="form-group mt-2">
                            <label className='text-center d-block py-2' htmlFor="email">Email</label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                className="form-control mt-2"
                                placeholder='Email'
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            {formErrors.email && <small className="text-danger">{formErrors.email}</small>}
                        </div>
                        <div className="form-group mt-2">
                            <label className='text-center d-block py-2' htmlFor="password">Password</label>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                className="form-control mt-2"
                                placeholder='Password'
                                value={formValues.password}
                                onChange={handleChange}
                            />
                            {formErrors.password && <small className="text-danger">{formErrors.password}</small>}
                        </div>
                        <div className='mt-4 text-center'>
                            <button type="submit" className="btn btn-primary w-50 mb-3 py-2 ">Register</button>
                        
                        </div>

                    </form>
                </div>
            </div>
        </div>


    );
};

export default SignUpForm;


