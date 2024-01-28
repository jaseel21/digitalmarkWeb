// src/components/ServicePage.jsx
import React from 'react';


const ServicePage = () => {
  return (
    <section id='service-section'>
<div className=" mx-auto  text-gray-900  bg-gray-900 p-4 ">
      <h1 className="text-3xl  font-bold mb-4 text-white">Our Services</h1>
      <p className="text-lg mb-8 text-white" >
        Explore our range of professional services to meet your needs.
      </p>
      {/* Add your service details here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-gray-800 border-2 border-gray-300 text-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold mb-2 border-b-2 border-green-500 pb-2">Web Designing </h2>
  <p className="text-gray-300">We provide the responsive and one page developing </p>
</div>
<div className="bg-gray-800 border-2 border-gray-300 text-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold mb-2 border-b-2 border-green-500 pb-2">Web Development</h2>
  <p className="text-gray-300">we having develop the backent using the node express</p>
</div>
<div className=" bg-gray-800 border-2 border-gray-300 text-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold mb-2 border-b-2 border-green-500 pb-2">Content Creating</h2>
  <p className="text-gray-300">we have create contents in every language what you want</p>
</div>
{/* <div className="bg-gray-800 border-2 border-gray-300 text-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold mb-2 border-b-2 border-green-500 pb-2">Service 4</h2>
  <p className="text-gray-300">Description of Service 1.</p>

</div> */}

        {/* Add more service items as needed */}
      </div>
    </div>
    </section>
    
  );
};

export default ServicePage;
