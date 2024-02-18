import React, { useRef } from 'react';
import UserSidebar from '@/components/UserSidebar';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Request() {
  const formikRef = useRef();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().trim().required('FirstName is required'),
  });
 
  return (
    <UserSidebar title="Request">
      <div className="h-auto py-5 px-3 my-auto">
        <>
          <h1 className="mb-8 text-2xl font-bold">Request VM Creation</h1>
          <form className="shadow-md bg-gray-50 rounded-md p-7 mb-8">
            {/* <h1 className="mb-4 text-2xl font-bold">Create your account</h1> */}
            <Formik
              initialValues={{
                firstName: '',
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
                <div className="text-xs lg:text-base">
                  <div className="mb-4">
                    <label>Workflow ID name</label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="Workflow ID name"
                      value={values.firstName}
                      onChange={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                      className="text-xs lg:text-base"
                    />
                    {errors.firstName && touched.firstName ? (
                      <p style={{ color: 'red' }}>{errors.firstName}</p>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label>Username selection</label>
                    <select
                      name="party"
                      type="text"
                      value={values.party}
                      onChange={handleChange('party')}
                      onBlur={handleBlur('party')}
                      className="text-xs lg:text-base"
                    >
                      <option value="CP">select</option>
                      <option value="CP">name1</option>
                      <option value="CP">name2</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label>Project name</label>
                    <select
                      name="party"
                      type="text"
                      value={values.party}
                      onChange={handleChange('party')}
                      onBlur={handleBlur('party')}
                      className="text-xs lg:text-base"
                    >
                      <option value="CP">select</option>
                      <option value="CP">name1</option>
                      <option value="CP">name2</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label>Number of VM</label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="Number of VM"
                      value={values.firstName}
                      onChange={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                      className="text-xs lg:text-base"
                    />
                    {errors.firstName && touched.firstName ? (
                      <p style={{ color: 'red' }}>{errors.firstName}</p>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label>Flavor</label>
                    <select
                      name="party"
                      type="text"
                      value={values.party}
                      onChange={handleChange('party')}
                      onBlur={handleBlur('party')}
                      className="text-xs lg:text-base"
                    >
                      <option value="CP">select</option>
                      <option value="CP">name1</option>
                      <option value="CP">name2</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label>Time period days</label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="Time period days"
                      value={values.firstName}
                      onChange={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                      className="text-xs lg:text-base"
                    />
                    {errors.firstName && touched.firstName ? (
                      <p style={{ color: 'red' }}>{errors.firstName}</p>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label>Purpose of VM</label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="Purpose of VM"
                      value={values.firstName}
                      onChange={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                      className="text-xs lg:text-base"
                    />
                    {errors.firstName && touched.firstName ? (
                      <p style={{ color: 'red' }}>{errors.firstName}</p>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label>VM name</label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="VM name"
                      value={values.firstName}
                      onChange={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                      className="text-xs lg:text-base"
                    />
                    {errors.firstName && touched.firstName ? (
                      <p style={{ color: 'red' }}>{errors.firstName}</p>
                    ) : null}
                  </div>
                  <div className="mb-10">
                    <label>Image</label>
                    <select
                      name="party"
                      type="text"
                      value={values.party}
                      onChange={handleChange('party')}
                      onBlur={handleBlur('party')}
                      className="text-xs lg:text-base"
                    >
                      <option value="CP">select</option>
                      <option value="CP">name1</option>
                      <option value="CP">name2</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-xs lg:text-base font-medium"
                    onClick={handleSubmit}
                    disabled={!isValid}
                  >
                    Submit
                  </button>
                </div>
              )}
            </Formik>
          </form>
        </>
      </div>
    </UserSidebar>
  );
}
