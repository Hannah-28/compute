import React from 'react';
import UserSidebar from '@/components/UserSidebar';


export default function Profile() {

  return (
    <UserSidebar title="Profile">
      <div className="h-screen py-5 px-3 my-auto">
        <>
          <h1 className="mb-8 text-2xl font-bold">Profile</h1>
          <div className='text-xs lg:text-base'>
            <div
              className="my-4"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h6 className='font-semibold'>First Name</h6>
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
                className='font-thin'
              >
                Anuoluwapo
              </p>
            </div>

            <div
              className="my-4"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h6 className='font-semibold'>Last Name</h6>
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
                className='font-thin'
              >
                Olurombi
              </p>
            </div>

            <div
              className="my-4"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h6 className='font-semibold'>Phone Number</h6>
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
                className='font-thin'
              >
                07055625874
              </p>
            </div>

            <div
              className="my-4"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h6 className='font-semibold'>Email</h6>
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
                className='font-thin'
              >
                oluronbianu@gmail.com
              </p>
            </div>

            <div
              className="my-4"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h6 className='font-semibold'>Country</h6>
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
                className='font-thin'
              >
                Nigeria
              </p>
            </div>
          </div>
        </>
      </div>
    </UserSidebar>
  );
}
