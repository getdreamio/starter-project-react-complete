import React from 'react';
import dream_logo from '../assets/dream_logo.png';

const IndexPage = () => {
  return (
    <div className="p-4 text-center">
      <img src={dream_logo} alt="Logo" style={{ height: 200 }} className="mx-auto" />
    </div>
  );
}

export default IndexPage;
