import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DreamMFAuthGuard } from "@dream.mf/oidc";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#273360] p-4 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/favicon.ico" alt="Logo" className="h-8 w-8 mr-3" />
            <NavLink to="/" className="text-3xl">Dream.mf Starter</NavLink>
          </div>
          <nav className="flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/sample/45" className="hover:underline">Sample</Link>
            <DreamMFAuthGuard stopRedirect={true} fallback={<></>}>
              <Link to="/logout" className="hover:underline">Logout</Link>
            </DreamMFAuthGuard>
          </nav>
        </div>
      </header>
      <main className="flex-1 container mx-auto pt-8">
        <div className="bg-[#212946] p-6 rounded-lg shadow-md text-white">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;