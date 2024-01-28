// src/components/MyProjectsPage.jsx
import React from 'react';

const MyProjectsPage = () => {
  return (
    <section id='projects-section'>

    <div className="bg-gray-900 mx-auto p-4  text-gray-100 pt-10">

      <h1 className="text-4xl font-bold mb-6 text-start">Explore My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-800  border-2 border-green-200 text-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">diploma Students portal</h2>
          <a href='https://adsadiploma-bbce3.web.app/' className='text-2 text-green-500'>https://adsadiploma-bbce3.web.app/</a>
          <p className="text-lg">this a sudents data collection site and through this website can check the various status of the each students</p>
        </div>

        <div className="bg-gray-800 border-2 border-green-200 text-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Project Two</h2>
          <h3 className='text-2 text-green-500'>https://domain.com</h3>
          <p className="text-lg">An exciting endeavor with a focus on user experience and design.</p>
        </div>

        <div className="bg-gray-800  border-2 border-green-200 text-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Project Three</h2>
          <h3 className='text-2 text-green-500'>https://domain.com</h3>
          <p className="text-lg">A sustainable project that aims to make a positive impact on the world.</p>
        </div>

        

        {/* Add more project items as needed */}
      </div>
    </div>
    </section>
  );
};

export default MyProjectsPage;
