import React, { Suspense } from 'react';
import { useParams } from "react-router-dom";
import { importRemote } from '@dream.mf/core';
import PageLoader from '../components/page-loader';
import { DreamMFAuthGuard } from '@dream.mf/oidc';

const SampleRemote = React.lazy(() =>
  importRemote({
      remoteUrl: process.env.REMOTE_SAMPLE_URL,
      scope: 'remote_sample',
      module: 'SamplePage',
      remoteUrlFallback: null
  })
);

const HomePage = () => {
  let { id } = useParams();
  return (
    <div className="p-4">
      <DreamMFAuthGuard fallback={<div className="p-2 text-center">Redirecting you to the auth provider...</div>}>
        <Suspense fallback={<PageLoader />}>
            <SampleRemote id={id} />
        </Suspense>
      </DreamMFAuthGuard>
    </div>
  );
}

export default HomePage;

