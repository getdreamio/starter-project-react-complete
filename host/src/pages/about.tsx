import React, { Suspense } from 'react';
import { importRemote } from '@dream.mf/core';
import PageLoader from '../components/page-loader';
import { useGetRemoteByAccessKey } from '@dream.mf/ros';

const AboutPage = () => {

  const AboutRemote = React.lazy(async () => {
    try {
      const remote = await useGetRemoteByAccessKey({
        rosUrl: process.env.NX_PUBLIC_DREAM_ROS_API, 
        accessKey: process.env.NX_PUBLIC_DREAM_ROS_ACCESSKEY,
        remoteKey: 'remote_about'
      });
      return importRemote({
          remoteUrl: remote?.url,
          scope: 'remote_about',
          module: 'AboutPage',
          //remoteUrlFallback: process.env.NX_PUBLIC_REMOTE_ABOUT_URL
      })
    } catch (error) {
      return <>Error: Unable to find remote via ros.</>
    }
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Dream.mf Starter Complete</h1>
      <br />
      <Suspense fallback={<PageLoader />}>
          <AboutRemote  />
      </Suspense>
    </div>
  );
}

export default AboutPage;


