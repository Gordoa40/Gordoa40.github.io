import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioDetail = ({ item }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
      <p className="text-gray-600 mb-4">{item.description}</p>
      <Link 
        to={`/portfolio/${item.id}`}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 inline-block"
      >
        Read More
      </Link>
    </div>
  );
};

export default PortfolioDetail;