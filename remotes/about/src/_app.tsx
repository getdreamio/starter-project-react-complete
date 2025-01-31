import React from 'react';
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Dream.mf | About</title>
      </Helmet>
      <div>
        <h3 className="text-xl font-bold mb-2">Project Overview</h3>
        <p className="mb-4">
          This project is a microfrontend architecture demonstration using Dream.mf and NX Workspaces. It showcases the integration 
          of multiple remote modules into a single application, allowing for independent development and deployment of different 
          parts of the application. It also includes an integration with Dream.mf Remote Orchestration Services (ROS).
        </p>
        <br />
        <h3 className="text-xl font-bold mb-2">Dream.mf Libraries</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Core - Import Remote and Runtime functionality (type DreamMF in console)</li>
          <li>OIDC - Authentication and user functionality</li>
          <li>Logging - Logging and error handling</li>
          <li>ROS - Seemless integration with Dream.mf Remote Orchestration Services</li>
        </ul>
        <br />
        <h3 className="text-xl font-bold mb-2">Remote Orchestration Services</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>ROS Frontend: <a target="_blank" href="http://localhost:3000">http://localhost:3000</a></li>
          <li>ROS Remote CDN: <a target="_blank" href="https://localhost:5001/remotes/">https://localhost:5001/remotes/</a></li>
          <li>ROS Backend Swagger: <a target="_blank" href="https://localhost:5001/swagger/">https://localhost:5001/swagger/</a></li>
        </ul>
        <br />
        <h3 className="text-xl font-bold mb-2">Technologies Used</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>React - A JavaScript library for building user interfaces</li>
          <li>React Router - For routing and navigation</li>
          <li>Tailwind CSS - A utility-first CSS framework for styling</li>
          <li>Dream.mf - A microfrontend framework for module federation</li>
          <li>Rspack - A fast build tool for bundling JavaScript applications</li>
          <li>NX - Rock solid monorepo management with module federation plugins</li>
          <li>PNPM - Better package management</li>
          <li>React Helmet - Head management for React (title, seo, etc)</li>
        </ul>
      </div>
    </>
  );
}

export default About;
