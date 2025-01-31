import React, { Suspense } from 'react';
import { useParams } from "react-router-dom";
import { importRemote } from '@dream.mf/core';
import PageLoader from '../components/page-loader';
import { DreamMFAuthGuard } from '@dream.mf/oidc';
import { useGetRemoteByAccessKey } from '@dream.mf/ros';

const SamplePage = () => {
  let { id } = useParams();

  const SampleRemote = React.lazy(async () => {
    const remote = await useGetRemoteByAccessKey({
      rosUrl: process.env.NX_PUBLIC_DREAM_ROS_API, 
      accessKey: process.env.NX_PUBLIC_DREAM_ROS_ACCESSKEY,
      remoteKey: 'remote_sample'
    });
    if (!remote) {
      return <>Error: Unable to find remote via ros.</>
    }
    return importRemote({
        remoteUrl: remote?.url,
        scope: remote?.scope,
        module: 'SamplePage',
        remoteUrlFallback: process.env.NX_PUBLIC_REMOTE_SAMPLE_URL
    })
  });

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

export default SamplePage;

