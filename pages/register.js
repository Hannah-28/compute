import React, { useRef } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Register() {
  const formikRef = useRef();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().trim().required('FirstName is required'),
    lastName: Yup.string().trim().required('LastName is required'),
    phoneNumber: Yup.string()
      .trim()
      .required('Phone Number is required')
      .min(11, 'Phone Number is less than 11 digits')
      .max(11, 'Phone Number is more than 11 digits'),
    email: Yup.string()
      .trim()
      .required('Email is required')
      .email('Fill in a valid email'),
    password: Yup.string().trim().required('Password is required'),
  });

  return (
    <Layout title="Register">
      <div className="max-w-6xl mx-auto px-8 mb-10 mt-24">
        <form className="shadow-md bg-gray-50 rounded-md p-7">
          <h1 className="mb-4 text-2xl font-bold">Create your account</h1>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phoneNumber: '',
              email: '',
              password: '',
            }}
            onSubmit={({ setSubmitting }) => {
              setSubmitting(false);
            }}
            validationSchema={validationSchema}
            innerRef={formikRef}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
              handleBlur,
            }) => (
              <>
                <div className="mb-4">
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                  />
                  {errors.firstName && touched.firstName ? (
                    <p style={{ color: 'red' }}>{errors.firstName}</p>
                  ) : null}
                </div>
                <div className="mb-4">
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                  />
                  {errors.lastName && touched.lastName ? (
                    <p style={{ color: 'red' }}>{errors.lastName}</p>
                  ) : null}
                </div>
                <div className="mb-4">
                  <input
                    name="phoneNumber"
                    type="tel"
                    placeholder="Phone Number"
                    value={values.phoneNumber}
                    onChange={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                  />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <p style={{ color: 'red' }}>{errors.phoneNumber}</p>
                  ) : null}
                </div>
                <div className="mb-4">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  {errors.email && touched.email ? (
                    <p style={{ color: 'red' }}>{errors.email}</p>
                  ) : null}
                </div>
                <div className="mb-10">
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange('password')}
                    onBlur={handleBlur('password')}
                  />
                  {errors.password && touched.password ? (
                    <p style={{ color: 'red' }}>{errors.password}</p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-base font-medium"
                  onClick={handleSubmit}
                  disabled={!isValid}
                >
                  Submit
                </button>
                <div className="flex mt-5 space-x-5 text-sm">
                  <Link
                    href="/login"
                    className="text-secondary hover:underline hover:text-secondary-dark"
                  >
                    LOGIN?
                  </Link>
                </div>
              </>
            )}
          </Formik>
        </form>
      </div>
    </Layout>
  );
}
