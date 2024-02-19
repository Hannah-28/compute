import React, { useState, useEffect } from 'react';
import UserSidebar from '@/components/UserSidebar';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSingleServer,
  getSingleServerCleanup,
} from '@/store/actions/get-single-server';
import {
  stopSingleServer,
  stopSingleServerCleanup,
} from '@/store/actions/stop-single-server';
import {
  startSingleServer,
  startSingleServerCleanup,
} from '@/store/actions/start-single-server';
import {
  rebootHardSingleServer,
  rebootHardSingleServerCleanup,
} from '@/store/actions/reboot-hard-single-server';
import {
  rebootSoftSingleServer,
  rebootSoftSingleServerCleanup,
} from '@/store/actions/reboot-soft-single.server';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SingleServer() {
  const router = useRouter();
  const dispatch = useDispatch();
  const getSingleServerState = useSelector((s) => s.getSingleServer);
  const [singleServer, setSingleServer] = useState([]);
  const stopSingleServerState = useSelector((s) => s.stopSingleServer);
  const [, setStop] = useState([]);
  const startSingleServerState = useSelector((s) => s.startSingleServer);
  const [, setStart] = useState([]);
  const rebootHardSingleServerState = useSelector(
    (s) => s.rebootHardSingleServer
  );
  const [, setRebootHard] = useState([]);
  const rebootSoftSingleServerState = useSelector(
    (s) => s.rebootSoftSingleServer
  );
  const [, setRebootSoft] = useState([]);

  const {
    query: { id },
  } = router;

  useEffect(() => {
    dispatch(getSingleServer(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (getSingleServerState.isSuccessful) {
      setSingleServer(getSingleServerState.data);
      dispatch(getSingleServerCleanup());
    } else if (getSingleServerState.error) {
      dispatch(getSingleServerCleanup());
    }
  }, [dispatch, getSingleServerState]);

  useEffect(() => {
    if (stopSingleServerState.isSuccessful) {
      setStop(stopSingleServerState.data);
      toast.success('Server stopped successfully!!!', {
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
        dispatch(stopSingleServerCleanup());
        router.push('/single-server');
      }, 3000);
    } else if (stopSingleServerState.error) {
      toast.error(`${stopSingleServerState.error}`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      dispatch(stopSingleServerCleanup());
    }
  }, [stopSingleServerState, dispatch, router]);

  const stop = () => {
    const body = {
      'os-stop': null,
    };
    dispatch(stopSingleServer(id, body));
  };

  useEffect(() => {
    if (startSingleServerState.isSuccessful) {
      setStart(startSingleServerState.data);
      toast.success('Server starts successfully!!!', {
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
        dispatch(startSingleServerCleanup());
        router.push('/single-server');
      }, 3000);
    } else if (startSingleServerState.error) {
      toast.error(`${startSingleServerState.error}`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      dispatch(startSingleServerCleanup());
    }
  }, [startSingleServerState, dispatch, router]);

  const start = () => {
    const body = {
      'os-start': null,
    };
    dispatch(startSingleServer(id, body));
  };

  useEffect(() => {
    if (rebootHardSingleServerState.isSuccessful) {
      setRebootHard(rebootHardSingleServerState.data);
      toast.success('Server reboot hard successfully!!!', {
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
        dispatch(rebootHardSingleServerCleanup());
        router.push('/single-server');
      }, 3000);
    } else if (rebootHardSingleServerState.error) {
      toast.error(`${rebootHardSingleServerState.error}`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      dispatch(rebootHardSingleServerCleanup());
    }
  }, [rebootHardSingleServerState, dispatch, router]);

  const rebootHard = () => {
    const body = {
      reboot: {
        type: 'HARD',
      },
    };
    dispatch(rebootHardSingleServer(id, body));
  };
  useEffect(() => {
    if (rebootSoftSingleServerState.isSuccessful) {
      setRebootSoft(rebootSoftSingleServerState.data);
      toast.success('Server reboot soft successfully!!!', {
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
        dispatch(rebootSoftSingleServerCleanup());
        router.push('/single-server');
      }, 3000);
    } else if (rebootSoftSingleServerState.error) {
      toast.error(`${rebootSoftSingleServerState.error}`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      dispatch(rebootSoftSingleServerCleanup());
    }
  }, [rebootSoftSingleServerState, dispatch, router]);

  const rebootSoft = () => {
    const body = {
      reboot: {
        type: 'SOFT',
      },
    };
    dispatch(rebootSoftSingleServer(id, body));
  };
  const keysToRender = [
    { path: 'server.name', displayName: 'Server Name' },
    { path: 'server.key_name', displayName: 'Key Name' },
    { path: 'server.OS-DCF:diskConfig', displayName: 'Disk Config' },
    { path: 'server.OS-EXT-AZ:availability_zone', displayName: 'Availability Zone' },
    { path: 'server.OS-EXT-STS:vm_state', displayName: 'VM State' },
    { path: 'server.addresses.External[0].addr', displayName: 'External Address' },
    { path: 'server.flavor.id', displayName: 'Flavor ID' },
    { path: 'server.created', displayName: 'Server Created' },
    { path: 'server.os-extended-volumes:volumes_attached[0].id', displayName: 'Volume Attached ID' },
  ];
  
  return (
    <UserSidebar title="Server Details">
      <div className="h-screen py-5 px-3 my-auto">
        {Object.keys(singleServer).length === 0 ? (
          <div className="spinner-border" role="status"></div>
        ) : (
          <>
            <h1 className="mb-8 text-2xl font-bold">Server Details</h1>
            <div className="text-xs lg:text-base">
              {keysToRender.map(({ path, displayName }) => {
                // Split the keyPath by '.' to access nested properties
                const pathKeys = path.split('.');
                // Access the nested property
                let value = singleServer;
                pathKeys.forEach((key) => {
                  if (key.includes('[')) {
                    const index = parseInt(key.match(/\[(.*?)\]/)[1]);
                    const arrayKey = key.substring(0, key.indexOf('['));
                    value = value?.[arrayKey]?.[index];
                  } else {
                    value = value?.[key];
                  }
                });
  
                return (
                  <div
                    key={path}
                    className="my-4"
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      width: '100%',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <h6 className="font-semibold">{displayName}</h6>
                    <p
                      style={{
                        border: '1px solid transparent',
                        borderRadius: '0.5em',
                        background: '#0f1624',
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                        padding: '0.3em 0.6em',
                        fontSize: '1em',
                      }}
                      className="font-thin"
                    >
                      {typeof value === 'object' ? JSON.stringify(value) : value}
                    </p>
                  
                  </div>
                );
              })}
              <div className="flex flex-wrap gap-7 w-full mt-10 justify-center">
                <button
                  type="button"
                  className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-xs lg:text-base font-medium"
                  onClick={start}
                >
                  Start
                </button>
                <button
                  type="button"
                  className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-xs lg:text-base font-medium"
                  onClick={stop}
                >
                  Stop
                </button>
                <button
                  type="button"
                  className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-xs lg:text-base font-medium"
                  onClick={rebootSoft}
                >
                  Reboot Soft
                </button>
                <button
                  type="button"
                  className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-xs lg:text-base font-medium"
                  onClick={rebootHard}
                >
                  Reboot Hard
                </button>
              </div>
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
