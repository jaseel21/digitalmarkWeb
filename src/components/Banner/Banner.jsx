import React from 'react';


const toContact=()=>{
  window.location.href = "#contact-section";
}
const Banner = () => {
  return (
    <section id='home-section'>

    <div className="bg-gray-900 text-white p-6 pt-16">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex-1">
          <h1 className="text-4xl  font-bold mb-4">I'm Thashfeeq</h1>
          <p className="text-lg mb-8">"Crafting Digital Experiences with Precision and Creativity" <br />
          ------------------------- <br />
          
          </p>
          <button onClick={toContact} className="bg-githubGreen font-bold text-white py-2 px-4 rounded-full">Contact</button>
        </div>
        <div className="flex-1 hidden md:flex justify-center items-center">
  <img
    src="https://jazeel-8011d.web.app/img/image001.png"
    className="rounded-full w-64 h-64 object-cover"
    alt="Your Image Alt Text"
  />
</div>
      </div>
    </div>
    </section>
  );
};

export default Banner;
