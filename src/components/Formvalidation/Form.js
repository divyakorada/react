import React, { useState } from 'react'
import '../Styles/Form.css'

const Form = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        console.log('target', e.target);
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
        console.log('setFormData', formData);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData)
        setErrors(newErrors);
        console.log('newErrors', (newErrors));

        if(Object.keys(newErrors).length === 0) {
            console.log('Form submitted successfully')
        } else {
            console.log('Form submission failed due to validation errors.')
        }
    }

    const validateForm = (data) => {
        const errors = {};
     //   console.log('data', data);

        if(!data.username.trim()) {
            errors.username = 'Username is required'
        } else if(data.username.length < 4) {
            errors.username = 'Username must be at least 4 characters long'
        }
        if(!data.email.trim()) {
            errors.email = "email is required"
        } else if(!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid'
        }

        if(!data.password.trim()) {
            errors.password = "Password is required"
        } else if(data.password.length < 8) {
            errors.password = "Password must be atleat 8 characters long"
        }

        if(data.confirmPassword !== data.password) {
            errors.confirmPassword = "Passwords do not match"
        }
        
        return errors;
    }

  return (
    <div className="form-container">
            <h2 className="form-title">Form Validation</h2>
            {/* eslint-disable-next-line no-undef */}
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">
                        Username:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange} 
                    />
                    {errors.username && (
                        <span className="error-message">
                            {errors.username}
                        </span>
                    )}
                </div>
                <div>
                    <label className="form-label">
                        Email:
                    </label>
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <span className="error-message">
                            {errors.email}
                        </span>
                    )}
                </div>
                <div>
                    <label className="form-label">
                        Password:
                    </label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && (
                        <span className="error-message">
                            {errors.password}
                        </span>
                    )}
                </div>
                <div>
                    <label className="form-label">
                        Confirm Password:
                    </label>
                    <input
                        className="form-input"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                        <span className="error-message">
                            {errors.confirmPassword}
                        </span>
                    )}
                </div>
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
  )
}

export default Form

/*/
https://stackblitz.com/edit/base-angular-12-app-kwhxggzy?file=src%2Fapp%2Fapp.component.html,src%2Fapp%2Fapp.component.ts
 Actually, loginForm does have a valid property. The reason the submit
button is enabling after entering valid values is because Angular's reactive
forms automatically track form state, including validity.
https://chatgpt.com/share/67e24d3d-e8f8-8001-a423-8d29afa1cc1d*/