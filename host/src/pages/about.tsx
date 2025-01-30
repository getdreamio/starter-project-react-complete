import React, { Suspense } from 'react';
import { importRemote } from '@dream.mf/core';
import PageLoader from '../components/page-loader';

const AboutRemote = React.lazy(() =>
  importRemote({
      remoteUrl: process.env.REMOTE_ABOUT_URL,
      scope: 'remote_about',
      module: 'AboutPage',
      remoteUrlFallback: null
  })
);

const AboutPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Dream.mf Starter</h1>
      <br />
      <Suspense fallback={<PageLoader />}>
          <AboutRemote  />
      </Suspense>
    </div>
  );
}

export default AboutPage;


