import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioItems } from './portfolioData';
import PhotoGallery from '../PhotoGallery';


const PortfolioItemPage = () => {
  const { id } = useParams();
  const item = portfolioItems.find(i => i.id === parseInt(id));

  if (!item) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/portfolio" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Portfolio</Link>
      <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
      <PhotoGallery images={item.images} />
      <p className="text-gray-700 mb-6">{item.fullDescription}</p>
      {/* Add more portfolio item details here */}
    </div>
  );
};

export default PortfolioItemPage;