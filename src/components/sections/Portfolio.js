import React, { useState } from 'react';
import PortfolioItem from '../portfolio/PortfolioItem';
import PortfolioDetail from '../portfolio/PortfolioDetail';
import { portfolioItems } from '../portfolio/portfolioData';

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(selectedItem?.id === item.id ? null : item);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <React.Fragment key={item.id}>
              <PortfolioItem
                {...item}
                onClick={() => handleItemClick(item)}
                isSelected={selectedItem?.id === item.id}
              />
              {selectedItem?.id === item.id && (
                <div className="md:col-span-2 lg:col-span-3">
                  <PortfolioDetail item={selectedItem} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;