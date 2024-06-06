// app/profile/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import client from '../../lib/apollo-client';

const GET_USER_PROFILE = gql`
  query viewer {
    user {
      id
      name
      email
      profilePicture
    }
  }
`;

export default function Profile() {
  const router = useRouter();
  const { data, loading, error } = useQuery(GET_USER_PROFILE, { client });

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      //router.push('/login');
    }
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Profile</h1>
      <div className="mt-4 flex flex-col items-center">
        {/*<img
          src={data?.user?.profilePicture}
          alt={`${data?.user?.name}'s profile`}
          className="h-32 w-32 rounded-full"
        />*/}
        {loading ? (
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Loading...</p>
        ) : error ? (
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Error: {error.message}</p>
        ) : (
          <>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Name: FirstName</p>
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">Email: UserEmail</p>
          </>
        )}
      </div>
    </main>
  );
  
}
