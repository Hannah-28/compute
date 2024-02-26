import React, { useState, useEffect } from 'react';
import UserSidebar from '@/components/UserSidebar';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSingleVolume,
  getSingleVolumeCleanup,
} from '@/store/actions/get-single-volume';
import {
  deleteSingleVolume,
  deleteSingleVolumeCleanup,
} from '@/store/actions/delete-single-volume';
import {
  extendSingleVolumeSize,
  extendSingleVolumeSizeCleanup,
} from '@/store/actions/extend-single-volume-size';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function SingleVolume() {
  const router = useRouter();
  const dispatch = useDispatch();
  const getSingleVolumeState = useSelector((s) => s.getSingleVolume);
  const [singleVolume, setSingleVolume] = useState([]);
  const deleteSingleVolumeState = useSelector((s) => s.deleteSingleVolume);
  const [, setDeleteSingleVolume] = useState([]);
  const extendSingleVolumeSizeState = useSelector(
    (s) => s.extendSingleVolumeSize
  );
  const [, setExtendSingleVolumeSize] = useState([]);
  const [size, setSize] = useState('');
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const {
    query: { id },
  } = router;

  useEffect(() => {
    dispatch(getSingleVolume(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (getSingleVolumeState.isSuccessful) {
      setSingleVolume(getSingleVolumeState.data);
      dispatch(getSingleVolumeCleanup());
    } else if (getSingleVolumeState.error) {
      dispatch(getSingleVolumeCleanup());
    }
  }, [dispatch, getSingleVolumeState]);

  useEffect(() => {
    if (deleteSingleVolumeState.isSuccessful) {
      setDeleteSingleVolume(deleteSingleVolumeState.data);
      toast.success('Volume deleted successfully!!!', {
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
        dispatch(deleteSingleVolumeCleanup());
        router.push('/storage');
      }, 3000);
    } else if (deleteSingleVolumeState.error) {
      toast.error(`${deleteSingleVolumeState.error}`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      dispatch(deleteSingleVolumeCleanup());
    }
  }, [deleteSingleVolumeState, dispatch, router]);

  const deleteVolume = () => {
    dispatch(deleteSingleVolume(id));
  };

  useEffect(() => {
    if (extendSingleVolumeSizeState.isSuccessful) {
      setExtendSingleVolumeSize(extendSingleVolumeSizeState.data);
      toast.success("Volume's size extended successfully!!!", {
        position: 'top-center',
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setTimeout(() => {
        dispatch(extendSingleVolumeSizeCleanup());
        window.location.reload();
      }, 6000);
    } else if (extendSingleVolumeSizeState.error) {
      toast.error(`${extendSingleVolumeSizeState.error}`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      dispatch(extendSingleVolumeSizeCleanup());
    }
  }, [extendSingleVolumeSizeState, dispatch, router]);

  const extendSize = () => {
    const body = {
      'os-extend': {
        new_size: size,
      },
    };
    dispatch(extendSingleVolumeSize(id, body));
  };

  const keysToRender = [
    { path: 'images.volume.name', displayName: 'Volume Name' },
    { path: 'images.volume.description', displayName: 'Description' },
    { path: 'images.volume.size', displayName: 'Size' },
    {
      path: 'images.volume.availability_zone',
      displayName: 'Availability Zone',
    },
    { path: 'images.volume.status', displayName: 'Status' },
    { path: 'images.volume.volume_type', displayName: 'Volume Type' },
    {
      path: 'images.volume.os-vol-tenant-attr:tenant_id',
      displayName: 'Tenant ID',
    },
    { path: 'images.volume.created_at', displayName: 'Volume Created' },
  ];

  return (
    <UserSidebar title="Volume Details">
      <div className="h-full py-5 px-3 my-auto">
        {Object.keys(singleVolume).length === 0 ? (
          <div className="spinner-border" role="status"></div>
        ) : (
          <>
            <h1 className="mb-8 text-2xl font-bold">Volume Details</h1>
            <div className="text-xs lg:text-base">
              {keysToRender.map(({ path, displayName }) => {
                // Split the keyPath by '.' to access nested properties
                const pathKeys = path.split('.');
                // Access the nested property
                let value = singleVolume;
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
                      {typeof value === 'object'
                        ? JSON.stringify(value)
                        : value}
                    </p>
                  </div>
                );
              })}
              <div className="flex flex-wrap gap-7 w-full mt-10 justify-center">
                <button
                  type="button"
                  className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-xs lg:text-base font-medium"
                  onClick={onOpenModal}
                >
                  Extend Size
                </button>
                <button
                  type="button"
                  className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-xs lg:text-base font-medium"
                  onClick={deleteVolume}
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <Modal open={open} onClose={onCloseModal} center>
        <h1 className="pt-10  pb-5 font-extrabold">
          Extend Volume&apos;s Size
        </h1>
        <div>
          <label htmlFor="size">Size</label>
          <input
            className="text-xs lg:text-base"
            name="size"
            id="size"
            type="number"
            step="1"
            onChange={(value) => setSize(value.target.value)}
          />
        </div>
        <footer className="float-right mt-6 space-x-6">
          <button
            type="submit"
            className="border-gray-400 text-black hover:bg-gray-400 px-3 py-2 rounded-md bg-gray-300 text-xs lg:text-base font-medium"
            onClick={onCloseModal}
          >
            Close
          </button>
          <button
            type="submit"
            className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-xs lg:text-base font-medium"
            onClick={() => {
              extendSize();
              onCloseModal();
            }}
            disabled={size === ''}
          >
            Proceed
          </button>
        </footer>
      </Modal>
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
