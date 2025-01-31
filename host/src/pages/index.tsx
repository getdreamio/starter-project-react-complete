import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";

const IndexPage = () => {

  const [rosStatus, setRosStatus] = useState('Checking...');

  useEffect(() => {
    fetch('https://localhost:5001/health')
      .then(response => response.text())
      .then(data => {
        setRosStatus(data);
      })
      .catch(error => {
        console.error('[ROS]', 'Error fetching ROS status:', error);
        setRosStatus('Unable to communicate with ROS');
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Dream.mf | Home</title>
      </Helmet>
      <div className="p-4 text-center">
      <img src={'images/dream_logo.png'} alt="Logo" style={{ height: 200 }} className="mx-auto" />

      <p className="mb-2 mt-8">
       Please ensure you have run the ROS setup script and are connected to the ROS network.
      </p>
      <p>ROS Status: {rosStatus}</p>
    </div>
    </>
    
  );
}

export default IndexPage;
