import React from 'react';

const About = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="mb-4">
          I'm a biomedical engineer with a passion for innovation and creativity. My professional journey has taken me from NASA to the pharmaceutical industry, where I currently work as an MES Engineer at Emerson, automating pharmaceutical manufacturing processes.
        </p>
        <p className="mb-4">
          Beyond my day job, I'm an avid maker and content creator, exploring various fields such as woodworking, leather crafting, stained glass design, furniture making, and video production.
        </p>
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
          View Resume
        </button>
      </div>
    </section>
  );
};

export default About;