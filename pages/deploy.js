import React, { useEffect, useState, useRef } from 'react';
import UserSidebar from '@/components/UserSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getServers, getServersCleanup } from '@/store/actions/get-servers';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router';

export default function Review() {
  const dispatch = useDispatch();
  const getServersState = useSelector((s) => s.getServers);
  const [servers, setServers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    dispatch(getServers());
  }, [dispatch]);

  useEffect(() => {
    if (getServersState.isSuccessful) {
      setServers(getServersState.data);
      dispatch(getServersCleanup());
    } else if (getServersState.error) {
      toast.error(`${getServersState.error}`, {
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
        dispatch(getServersCleanup());
        router.push('/profile');
      }, 3000);
    }
  }, [dispatch, getServersState, router]);

  function sendProps(id) {
    Router.push({
      pathname: '/single-server',
      query: {
        id,
      },
    });
  }
  return (
    <UserSidebar title="Servers">
      <div className="h-screen py-5 px-3 my-auto">
        {servers.length === 0 ? (
          <>
            <div className="spinner-border" role="status"></div>
          </>
        ) : (
          <>
            <h1 className="mb-8 text-2xl font-bold">Servers</h1>

            <div className="text-xs lg:text-base flex flex-wrap space-x-8">
              {servers.servers.map((data, i) => (
                <div
                  key={i}
                  className="shadow-md bg-gray-50 rounded-md w-fit p-7 mb-8 text-center grid gap-4"
                >
                  <p className="text-xl">{data.name}</p>
                  <a
                    className="border-black text-white hover:bg-black hover:cursor-pointer px-2 py-1 rounded-md bg-zinc-900 text-sm font-medium"
                    onClick={() => sendProps(data.id)}
                  >
                    View
                  </a>
                </div>
              ))}
            </div>
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
