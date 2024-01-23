import React, { useRef } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const formikRef = useRef();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .required('Email Address is required')
      .email('Fill in a valid email address'),
    password: Yup.string().trim().required('Password is required'),
  });

  return (
    <Layout title="Login">
      <div className="max-w-6xl mx-auto px-8 mb-10 mt-24">
        <form className="shadow-md bg-gray-50 rounded-md p-7">
          <h1 className="mb-4 text-2xl font-bold">Login</h1>

          <Formik
            initialValues={{
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
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={values.votersID}
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
                  className="border-secondary hover:border-secondary-dark text-white hover:bg-secondary-dark px-8 py-2 rounded-md bg-secondary text-base font-medium hover:cursor-pointer"
                  onClick={handleSubmit}
                  disabled={!isValid}
                >
                  Login
                </button>
                <div className="flex mt-5 space-x-5 text-sm">
                  <Link
                    href="/register"
                    className="text-secondary hover:underline hover:text-secondary-dark"
                  >
                    REGISTER?
                  </Link>
                  <Link
                    href="/forgot-password"
                    className="text-secondary hover:underline hover:text-secondary-dark"
                  >
                    FORGOT PASSWORD?
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
