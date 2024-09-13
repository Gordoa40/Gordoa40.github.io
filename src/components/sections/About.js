import React from 'react';
import PageTransition from './PageTransition';
import PhotoGallery from '../PhotoGallery';
import { Link } from 'react-router-dom';


const images = ['adam-1.jpg', 'adam-2.jpg', 'adam-3.JPG', 'adam-4.jpg', 'adam-5.JPG', 'adam-6.jpg'];

const About = () => {
  return (
    <PageTransition>
    <section className="py-12 min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold mb-6 dark:text-gray-300">About</h2>
        <p className="mb-4 dark:text-gray-300">
          I'm a biomedical engineer with a passion for innovation and creativity. My professional journey has taken me from NASA to the pharmaceutical industry, where I currently work as an MES Engineer at Emerson, automating pharmaceutical manufacturing processes.
        </p>
        <p className="mb-4 dark:text-gray-300">
          Beyond my day job, I'm an avid maker and content creator, exploring various fields such as woodworking, leather crafting, stained glass design, furniture making, and video production.
        </p>
        <div class="flex justify-center space-x-8">
            <Link 
            to={`/resume/`}
            className="bg-orange-500 mb-4 text-white px-5 py-2 rounded-full text-md font-semibold hover:bg-orange-600 transition duration-300"
          >
            View Resume
          </Link>
          <Link 
            to={`/projects/`}
            className="bg-orange-500 mb-4 text-white px-5 py-2 rounded-full text-md font-semibold hover:bg-orange-600 transition duration-300"
          >
            View Projects
          </Link>
          <Link 
            to={`/gallery/`}
            className="bg-orange-500 mb-4 text-white px-5 py-2 rounded-full text-md font-semibold hover:bg-orange-600 transition duration-300"
          >
            View Gallery
          </Link>
      </div>
        <PhotoGallery images={images} />

      </div>
    </section>
    </PageTransition>
  );
};

export default About;