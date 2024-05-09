import React from 'react';
import UserSidebar from '@/components/UserSidebar';
import Link from 'next/link';

export default function Deploy() {
  return (
    <UserSidebar title="Deploy">
      <div className="min-h-screen py-5 px-3 my-auto">
        <h1 className="mb-8 text-2xl font-bold">Deploy</h1>

        <div className="text-xs lg:text-base grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
          <div className="shadow-md mr-7 bg-gray-50 rounded-md p-7 mb-8 text-center grid gap-4 bg-[url('/gemma.png')] bg-center bg-no-repeat bg-cover">
            <div className="w-full flex flex-wrap items-center justify-between">
              <p className="font-bold">Name</p>
              <p>Gemma LLM Deploy</p>
            </div>

            <div className="w-full flex flex-wrap items-center justify-between">
              <p className="font-bold">Description</p>
              <p>Create your own Gemma deployment</p>
            </div>

            <div className="w-full flex flex-wrap items-center justify-between">
              <p className="font-bold">Cost</p>
              <p>from $0.30/hr</p>
            </div>

            <Link
              className="w-fit border-black text-white hover:bg-black hover:cursor-pointer px-1 py-1 rounded-md bg-zinc-900 text-xs font-medium"
              href="/request"
            >
              DEPLOY VM
            </Link>
          </div>

          <div className="shadow-md mr-7 bg-gray-50 rounded-md p-7 mb-8 text-center grid gap-4">
            <div className="w-full flex flex-wrap items-center justify-between">
              <p className="font-bold">Name</p>
              <p>Deploy 2</p>
            </div>

            <div className="w-full flex flex-wrap items-center justify-between">
              <p className="font-bold">Description</p>
              <p>High availability</p>
            </div>

            <div className="w-full flex flex-wrap items-center justify-between">
              <p className="font-bold">Cost</p>
              <p>$121.5/hr</p>
            </div>

            <Link
              className="w-fit border-black text-white hover:bg-black hover:cursor-pointer px-1 py-1 rounded-md bg-zinc-900 text-xs font-medium"
              href="/request"
            >
              DEPLOY VM
            </Link>
          </div>

          <div className="shadow-md mr-7 bg-gray-50 rounded-md p-7 mb-8 text-center grid gap-4">
            <div className="w-full flex flex-wrap items-center justify-between">
              <p className="font-bold">Name</p>
              <p>Deploy 3</p>
            </div>

            <div className="w-full flex flex-wrap items-center justify-between">
              <p className="font-bold">Description</p>
              <p>Low maintenance</p>
            </div>

            <div className="w-full flex flex-wrap items-center justify-between">
              <p className="font-bold">Cost</p>
              <p>$100/hr</p>
            </div>

            <Link
              className="w-fit border-black text-white hover:bg-black hover:cursor-pointer px-1 py-1 rounded-md bg-zinc-900 text-xs font-medium"
              href="/request"
            >
              DEPLOY VM
            </Link>
          </div>

          <div className="shadow-md mr-7 bg-gray-50 rounded-md p-7 mb-8 text-center grid gap-4">
            <div className="w-full flex flex-wrap items-center justify-between">
              <p className="font-bold">Name</p>
              <p>Deploy 4</p>
            </div>

            <div className="w-full flex flex-wrap items-center justify-between">
              <p className="font-bold">Description</p>
              <p>High maintenance</p>
            </div>

            <div className="w-full flex flex-wrap items-center justify-between">
              <p className="font-bold">Cost</p>
              <p>$325/hr</p>
            </div>

            <Link
              className="w-fit border-black text-white hover:bg-black hover:cursor-pointer px-1 py-1 rounded-md bg-zinc-900 text-xs font-medium"
              href="/request"
            >
              DEPLOY VM
            </Link>
          </div>
          <div className="shadow-md mr-7 bg-gray-50 rounded-md p-7 mb-8 text-center grid gap-4">
            <div className="w-full flex flex-wrap items-center justify-between">
              <p className="font-bold">Name</p>
              <p>Deploy 5</p>
            </div>

            <div className="w-full flex flex-wrap items-center justify-between">
              <p className="font-bold">Description</p>
              <p>Low process</p>
            </div>

            <div className="w-full flex flex-wrap items-center justify-between">
              <p className="font-bold">Cost</p>
              <p>$220/hr</p>
            </div>

            <Link
              className="w-fit border-black text-white hover:bg-black hover:cursor-pointer px-1 py-1 rounded-md bg-zinc-900 text-xs font-medium"
              href="/request"
            >
              DEPLOY VM
            </Link>
          </div>
        </div>
      </div>
    </UserSidebar>
  );
}
