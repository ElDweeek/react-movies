import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import './SignIn.css'
const SignInForm = () => {
  const history = useHistory();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Sign in data:', values);
    setSubmitting(false);
  };

  const goToRegister = () => {
    history.push('/register');
  };

  return (
    <div className="container pt-5 signin-form">
      <h2 className='text-center'>Sign In</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="form-control"
                id="email"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="form-control"
                id="password"
              />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>
            <div className="button-holder d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-danger"
                onClick={goToRegister}
              >
                Register
              </button>
              <button type="submit" className="btn btn-success" disabled={isSubmitting}>
                Sign In
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
