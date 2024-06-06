// app/analytics/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import client from '../../lib/apollo-client';

const GET_ANALYTICS = gql`
  query GetAnalytics { Name }
`;

export default function Analytics() {
  const router = useRouter();
  const { data, loading, error } = useQuery(GET_ANALYTICS, { client });

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      //router.push('/login');
    }
  }, [router]);

  if (loading) return (<div><h1 className="text-4xl font-bold text-gray-900 dark:text-white">Analytics</h1> <div className='flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-900'><p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Loading...</p></div></div>);
  if (error) return (  <div><h1 className="text-4xl font-bold text-gray-900 dark:text-white">Analytics</h1><div className='flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-900'><p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Error: {error.message}</p></div></div>);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Analytics</h1>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Views</h2>
          <p className="mt-2 text-2xl text-gray-700 dark:text-gray-300">{data.analytics.views}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Clicks</h2>
          <p className="mt-2 text-2xl text-gray-700 dark:text-gray-300">{data.analytics.clicks}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Conversions</h2>
          <p className="mt-2 text-2xl text-gray-700 dark:text-gray-300">{data.analytics.conversions}</p>
        </div>
      </div>
    </main>
  );
}
