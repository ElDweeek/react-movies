import React, { useState } from 'react';
import './RegisterForm.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [validated, setValidated] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false || formData.password !== formData.confirmPassword) {
      e.stopPropagation();
      setValidated(true);
    } else {

      console.log('Form submitted', formData);
      setSuccess(true);
      setValidated(false);
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };
  const history = useHistory();

  const goToSignIn = () => {
    history.push('/signin');

  }

  return (
    <div className="container pt-5 register-form">
      <h2 className='text-center'>Register</h2>
      {success && (
        <div className="alert alert-success" role="alert">
          Registration successful!
        </div>
      )}
      <form noValidate onSubmit={handleSubmit} className={validated ? 'was-validated' : ''}>
        <div className="mb-3 ">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            required
            value={formData.username}
            onChange={handleChange}
          />
          <div className="invalid-feedback">Please enter a username.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <div className="invalid-feedback">Please enter a valid email address.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            pattern=".{8,}" 
          />
          <div className="invalid-feedback">
            Please enter a password with at least 8 characters.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className={`form-control ${validated && formData.confirmPassword !== formData.password ? 'is-invalid' : ''
              }`}
            id="confirmPassword"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className="invalid-feedback">
            {formData.confirmPassword !== formData.password
              ? 'Passwords do not match.'
              : 'Please confirm your password.'}
          </div>
        </div>
        <div className="button-holder d-flex justify-content-between">
          <button type="button" className="btn btn-danger" onClick={goToSignIn}>
          Sign In
          </button>
          <button type="submit" className="btn btn-success">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
