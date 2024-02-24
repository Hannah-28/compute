import React from 'react';
import UserSidebar from '@/components/UserSidebar';
import Link from 'next/link';

export default function Deploy() {
  return (
    <UserSidebar title="Deploy">
      <div className="h-screen py-5 px-3 my-auto">
        <h1 className="mb-8 text-2xl font-bold">Deploy</h1>
        <div>
          <Link
            className="w-full border-black text-white hover:bg-black hover:cursor-pointer px-2 py-1 rounded-md bg-zinc-900 text-sm font-medium"
            href="/request"
          >
            DEPLOY VM
          </Link>
        </div>
      </div>
    </UserSidebar>
  );
}
