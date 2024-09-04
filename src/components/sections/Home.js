import React from 'react';
import PageTransition from './PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <div className="text-center py-24 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-5xl font-bold mb-4 dark:text-white">Adam Gordon</h1>
        <h2 className="text-2xl mb-8 dark:text-gray-300">Engineer | Maker | Content Creator</h2>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
          Learn More
        </button>
      </div>
    </PageTransition>
  );
};

export default Home;