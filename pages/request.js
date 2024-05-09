import React, { useRef, useEffect, useState } from 'react';
import UserSidebar from '@/components/UserSidebar';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  createServer,
  createServerCleanup,
} from '@/store/actions/create-server';
import { getKeyPairs, getKeyPairsCleanup } from '@/store/actions/get-key-pairs';
import { getImages, getImagesCleanup } from '@/store/actions/get-images';
import { getFlavors, getFlavorsCleanup } from '@/store/actions/get-flavors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Request() {
  const formikRef = useRef();
  const dispatch = useDispatch();
  const createServerState = useSelector((s) => s.createServer);
  const getKeyPairsState = useSelector((s) => s.getKeyPairs);
  const getImagesState = useSelector((s) => s.getImages);
  const getFlavorsState = useSelector((s) => s.getFlavors);
  const [keyPairs, setKeyPairs] = useState([]);
  const [images, setImages] = useState([]);
  const [flavors, setFlavors] = useState([]);
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required('Name is required'),
    username: Yup.string().trim().required('Username is required'),
    key_name: Yup.string().trim().required('Key pair is required'),
    imageRef: Yup.string().trim().required('Image is required'),
    flavorRef: Yup.string().trim().required('Flavor is required'),
    model_size: Yup.string().trim().required('Model size is required'),
    password: Yup.string().trim().required('Password is required'),
  });

  useEffect(() => {
    dispatch(getKeyPairs());
    dispatch(getImages());
    dispatch(getFlavors());
  }, [dispatch]);

  useEffect(() => {
    if (getKeyPairsState.isSuccessful) {
      setKeyPairs(getKeyPairsState.data);
      dispatch(getKeyPairsCleanup());
    } else if (getKeyPairsState.error) {
      dispatch(getKeyPairsCleanup());
    }
  }, [dispatch, getKeyPairsState]);

  useEffect(() => {
    if (getImagesState.isSuccessful) {
      setImages(getImagesState.data);
      dispatch(getImagesCleanup());
    } else if (getImagesState.error) {
      dispatch(getImagesCleanup());
    }
  }, [dispatch, getImagesState]);

  useEffect(() => {
    if (getFlavorsState.isSuccessful) {
      setFlavors(getFlavorsState.data);
      dispatch(getFlavorsCleanup());
    } else if (getFlavorsState.error) {
      dispatch(getFlavorsCleanup());
    }
  }, [dispatch, getFlavorsState]);

  useEffect(() => {
    if (createServerState.isSuccessful) {
      if (formikRef.current) {
        formikRef.current.resetForm();
      }
      toast.success('Server created successfully!!!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setTimeout(() => {
        dispatch(createServerCleanup());
        router.push('/resources');
      }, 3000);
    } else if (createServerState.error) {
      toast.error(`${createServerState.error}`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      dispatch(createServerCleanup());
    }
  }, [createServerState, dispatch, router]);

  return (
    <UserSidebar title="Request">
      <div className="min-h-screen py-5 px-3 my-auto">
        {keyPairs.length === 0 &&
        images.length === 0 &&
        flavors.length === 0 ? (
          <div
            className="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent text-primary-dark rounded-full dark:text-primary-dark"
            role="status"
            aria-label="loading"
          ></div>
        ) : (
          <>
            <h1 className="mb-8 text-2xl font-bold">Request VM Creation</h1>
            <form className="shadow-md bg-gray-50 rounded-md p-7 mb-8 w-full lg:w-3/4 xl:2/4 2xl:1/3">
              <Formik
                initialValues={{
                  name: '',
                  username: '',
                  key_name: '',
                  imageRef: '',
                  flavorRef: '',
                  model_size: '',
                  password: '',
                }}
                onSubmit={(values, { setSubmitting }) => {
                  dispatch(createServer(values));
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
                      <label>VM name</label>
                      <input
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange('name')}
                        onBlur={handleBlur('name')}
                        className="text-xs lg:text-base"
                      />
                      {errors.name && touched.name ? (
                        <p style={{ color: 'red' }}>{errors.name}</p>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <label>VM username</label>
                      <input
                        name="username"
                        type="text"
                        value={values.username}
                        onChange={handleChange('username')}
                        onBlur={handleBlur('username')}
                        className="text-xs lg:text-base"
                      />
                      {errors.username && touched.username ? (
                        <p style={{ color: 'red' }}>{errors.username}</p>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <label>Key Name</label>
                      <select
                        name="key_name"
                        type="text"
                        value={values.key_name}
                        onChange={handleChange('key_name')}
                        onBlur={handleBlur('key_name')}
                        className="text-xs lg:text-base"
                      >
                        <option value="">select</option>
                        {keyPairs?.flavors?.keypairs.map((data, i) => (
                          <option value={data.keypair.name} key={i}>
                            {data.keypair.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <label>Image</label>
                      <select
                        name="imageRef"
                        type="text"
                        value={values.imageRef}
                        onChange={handleChange('imageRef')}
                        onBlur={handleBlur('imageRef')}
                        className="text-xs lg:text-base"
                      >
                        <option value="">select</option>
                        {images?.images?.images.map((data, i) => (
                          <option value={data.id} key={i}>
                            {data.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <label>Flavor</label>
                      <select
                        name="flavorRef"
                        type="text"
                        value={values.flavorRef}
                        onChange={handleChange('flavorRef')}
                        onBlur={handleBlur('flavorRef')}
                        className="text-xs lg:text-base"
                      >
                        <option value="">select</option>
                        {flavors?.flavors?.flavors.map((data, i) => (
                          <option value={data.id} key={i}>
                            Name: {data.name} Disk: {data.disk} Ram: {data.ram}{' '}
                            Vcpus: {data.vcpus}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <label>Model size</label>
                      <select
                        name="model_size"
                        type="text"
                        value={values.model_size}
                        onChange={handleChange('model_size')}
                        onBlur={handleBlur('model_size')}
                        className="text-xs lg:text-base"
                      >
                        <option value="">select</option>
                        <option value="2b">2b</option>
                        <option value="7b">7b</option>
                      </select>
                    </div>

                    <div className="mb-10">
                      <label>VM password</label>
                      <input
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange('password')}
                        onBlur={handleBlur('password')}
                        className="text-xs lg:text-base"
                      />
                      {errors.password && touched.password ? (
                        <p style={{ color: 'red' }}>{errors.password}</p>
                      ) : null}
                    </div>

                    <button
                      type="submit"
                      className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-xs lg:text-base font-medium"
                      onClick={handleSubmit}
                      disabled={!isValid || createServerState.isLoading}
                    >
                      Submit
                    </button>
                  </div>
                )}
              </Formik>
            </form>
          </>
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </UserSidebar>
  );
}
