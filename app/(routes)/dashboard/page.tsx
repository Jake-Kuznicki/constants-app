// app/dashboard/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import client from '../../lib/apollo-client';

const GET_USER_INFO = gql`
  query viewer {
    user {
      id
      name
      email
    }
  }
`;

export default function Dashboard() {
  const router = useRouter();
  const { data, loading, error } = useQuery(GET_USER_INFO, { client });

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      //router.push('/login');
    }
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
         {loading ? (
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Loading...</p>
        ) : error ? (
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Error: {error.message}</p>
        ) : (
            <div>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Welcome, User!</p>
            </div>
        )}
    </main>
  );
}
