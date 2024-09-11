import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import PageTransition from './PageTransition';

const galleryData = [
  {
    section: 'Mechanical Design',
    images: [
      { src: '/images/Mechanical/robotArm-1.jpg', alt: 'Robot 1' },
    ]
  },
  {
    section: 'CAD',
    images: [
      { src: '/images/cad/cam1.png', alt: 'CAD Design 1' },
      { src: '/images/cad/cam2.png', alt: 'CAD Design 2' },
      { src: '/images/cad/cam3.png', alt: 'CAD Design 3' },
      { src: '/images/cad/cam3.png', alt: 'CAD Design 4' },
      { src: '/images/cad/gripper1.png', alt: 'CAD Design 5' },
      { src: '/images/cad/gripperclosing.gif', alt: 'CAD Design 6' },
      { src: '/images/cad/robotArm-1.png', alt: 'CAD Design 7' },
      { src: '/images/cad/cabinet-1.png', alt: 'CAD Design 8' },



    ]
  },
  {
    section: 'Woodworking',
    images: [
      { src: '\images\woodworking\bedFrame-1.JPEG', alt: 'Woodworking Project 1' },
      { src: '/images/woodworking/bedFrame-2.JPEG', alt: 'Woodworking Project 2' },
      { src: '/images/woodworking/bendyLamp.JPEG', alt: 'Woodworking Project 3' },
      { src: '/images/woodworking/brickBoard-1.JPEG', alt: 'Woodworking Project 3' },
      { src: '/images/woodworking/brickBoard-2.JPEG', alt: 'Woodworking Project 3' },
      { src: '/images/woodworking/brickBoard-3.JPEG', alt: 'Woodworking Project 3' },
      { src: '/images/woodworking/chair-5.jpg', alt: 'Woodworking Project 3' },
      { src: '/images/woodworking/cuttingBoard-1.JPEG', alt: 'Woodworking Project 3' },
      { src: '/images/woodworking/furniture-project-1.jpg', alt: 'Woodworking Project 3' },
      { src: '/images/woodworking/IMG_9476.JPEG', alt: 'Woodworking Project 3' },
      { src: '/images/woodworking/mcmHutch-11.JPEG', alt: 'Woodworking Project 3' },
      { src: '/images/woodworking/nestSideTables-1.JPEG', alt: 'Woodworking Project 3' },
      { src: '/images/woodworking/nestSideTables-3.JPEG', alt: 'Woodworking Project 3' },
      { src: '/images/woodworking/wallhooks-1.JPEG', alt: 'Woodworking Project 3' },
      { src: '/images/woodworking/waveMirror-1.jpg', alt: 'Woodworking Project 3' },
      { src: '/images/woodworking/waveMirror-2.jpg', alt: 'Woodworking Project 3' },



    ]
  },
];

const Gallery = () => {
  const [activeSection, setActiveSection] = useState(galleryData[0].section);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const activeImages = galleryData.find(item => item.section === activeSection).images;

  return (
    <PageTransition>
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Gallery</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            {galleryData.map((item) => (
              <button
                key={item.section}
                onClick={() => setActiveSection(item.section)}
                className={`px-4 py-2 rounded-full ${
                  activeSection === item.section
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
                }`}
              >
                {item.section}
              </button>
            ))}
          </div>
          <Masonry
            breakpointCols={{
              default: 3,
              1100: 2,
              700: 1
            }}
            className="flex w-auto"
            columnClassName="bg-clip-padding px-2"
          >
            {activeImages.map((image, index) => (
              <motion.div
                key={image.src}
                className="mb-4 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setPhotoIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <img src={image.src} alt={image.alt} className="w-full rounded-lg shadow-md" />
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={activeImages}
        index={photoIndex}
      />
    </PageTransition>
  );
};

export default Gallery;