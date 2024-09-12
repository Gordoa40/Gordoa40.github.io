import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";
import PageTransition from './PageTransition';

const galleryData = [
  {
    section: 'Senior Design Project',
    items: [
      { type: 'image', src: '/images/SeniorDesign/nitinol-1.jpeg',  caption: 'Testing mechanical properties of nitinol' },
      { type: 'image', src: '/images/SeniorDesign/nitinol-2.jpeg', caption: 'Perparing to cut out the first bone-fixation plate out of nitinol' },
      { type: 'image', src: '/images/SeniorDesign/nitinol-3.jpeg',  caption: 'Aluminum example showing compression/deflection when arms are bent, early prototype' },
      { type: 'image', src: '/images/SeniorDesign/nitinol-4.jpeg',  caption: 'Other Aluminum examples showcasing compression, early prototype' },
      { type: 'image', src: '/images/SeniorDesign/nitinol-5.jpeg',  caption: 'Recieving prototypes from manufacturer' },
      { type: 'image', src: '/images/SeniorDesign/nitinolplate-1.png',  caption: 'CAD Model of the final plate design' },
      { type: 'image', src: '/images/SeniorDesign/nitinolplate-1.png',  caption: 'CAD Model of the final plate design with applicator attached' },
      { type: 'image', src: '/images/SeniorDesign/nitinolplate-1.png',  caption: 'CAD Model of early plate design, with applicator' },
      { type: 'video', src: '/images/SeniorDesign/nitinol-vid-1.mp4',  caption: 'First, rough, nitinol prototype showcasing shape-memory under heating/cooling' },
      { type: 'video', src: '/images/SeniorDesign/tubecleaner-vid-1.mp4',  caption: 'Enteral Feeding Tube Cleaner Prototype' },
    ]
  },
  {
    section: 'NASA',
    items: [
      { type: 'image', src: '/images/NASA/missioncontrol.jpeg', alt: 'Mission Control', caption: 'Hanging out in ISS Mission Control' },
      { type: 'image', src: '/images/NASA/psion.jpeg', alt: 'PSION Laboratory', caption: 'Part of the PSION Laboratory, where I worked. MED-2 can be seen on the ground.' },
      { type: 'image', src: '/images/NASA/psion-2.jpeg', alt: 'Teslasuit', caption: 'Testing the Teslasuit Haptic Feedback Vest and VIVE Pro VR headset' },
      { type: 'image', src: '/images/NASA/gene.jpeg', alt: 'Gene Kranz', caption: 'Me and Gene Kranz, the Flight Director for Apollo 11 and many other missions.' },
      { type: 'image', src: '/images/NASA/ARED-1.jpeg', alt: 'ARED', caption: 'The Advanced Resistive Exercise Device (ARED) that was created by my . One of two in existence, the other is on the ISS.' },
      { type: 'video', src: '/images/NASA/ared-2.mp4', alt: 'ARED', caption: 'Video of me testing out ARED' },
      { type: 'image', src: '/images/NASA/NBL-2.jpeg', alt: 'NBL', caption: 'NASA\'s Neutral Buoyancy Laboratory' },
      { type: 'image', src: '/images/NASA/NBL-1.jpeg', alt: 'NBL', caption: 'With an Astronaut ready to train' },
      { type: 'image', src: '/images/NASA/NBL-3.jpeg', alt: 'NBL', caption: 'An Astronaut ready to be lowered into the pool' },
      { type: 'image', src: '/images/NASA/robonaut.jpeg', alt: 'robonaut', caption: 'Meeting Robonaut, the robotic astronaut' },
      { type: 'image', src: '/images/NASA/flying.jpg', alt: 'flying', caption: 'Flying at night over Houston with my mentor, Jeevan' }
    ]
  },
  {
    section: 'Mechanical Design/CAD',
    items: [
      { type: 'image', src: '/images/Mechanical/robotArm-1.jpg', alt: 'Robot 1', caption: '6-Axis Robot Arm' },
      { type: 'image', src: '/images/cad/cam1.png', alt: 'CAD Design 1', caption: '35mm Film Camera CAD Model (unfinished)' },
      { type: 'image', src: '/images/cad/cam2.png', alt: 'CAD Design 2', caption: '35mm Film Camera CAD Model (unfinished)' },
      { type: 'image', src: '/images/cad/cam3.png', alt: 'CAD Design 3', caption: '35mm Film Camera CAD Model (unfinished)' },
      { type: 'image', src: '/images/cad/gripper1.png', alt: 'CAD Design 5', caption: 'Robotic Arm End Effector early design design' },
      { type: 'image', src: '/images/cad/gripperclosing.gif', alt: 'CAD Design 6', caption: 'Gripper 4-bar linkage closing animation' },
      { type: 'image', src: '/images/cad/robotArm-1.png', alt: 'CAD Design 7', caption: 'Full robot arm assembly' },
      { type: 'image', src: '/images/cad/cabinet-1.png', alt: 'CAD Design 8', caption: 'Custom cabinet design' },
    ]
  },
  {
    section: 'Woodworking',
    items: [
      { type: 'image', src: '/images/woodworking/bedFrame-1.JPEG', alt: 'Woodworking Project 1', caption: 'Custom bed frame' },
      { type: 'image', src: '/images/woodworking/bedFrame-2.JPEG', alt: 'Woodworking Project 2', caption: 'Bed frame detail' },
      { type: 'image', src: '/images/woodworking/bendyLamp.JPEG', alt: 'Woodworking Project 3', caption: 'Power-Carved Lamp' },
      { type: 'image', src: '/images/woodworking/brickBoard-1.JPEG', alt: 'Woodworking Project 4', caption: 'Brick-inspired cutting board' },
      { type: 'image', src: '/images/woodworking/brickBoard-2.JPEG', alt: 'Woodworking Project 5', caption: 'Cutting board detail' },
      { type: 'image', src: '/images/woodworking/brickBoard-3.JPEG', alt: 'Woodworking Project 6', caption: 'Finished cutting board' },
      { type: 'image', src: '/images/woodworking/chair-5.jpg', alt: 'Woodworking Project 7', caption: 'Mid-century inspired chair' },
      { type: 'image', src: '/images/woodworking/cuttingBoard-1.JPEG', alt: 'Woodworking Project 8', caption: 'Geometric cutting board' },
      { type: 'image', src: '/images/woodworking/furniture-project-1.jpg', alt: 'Woodworking Project 9', caption: 'Mid-century modern hutch' },
      { type: 'image', src: '/images/woodworking/IMG_9476.JPEG', alt: 'Woodworking Project 10', caption: 'Media stand I made for some friends of mine' },
      { type: 'image', src: '/images/woodworking/mcmHutch-11.JPEG', alt: 'Woodworking Project 11', caption: 'Mid-century modern hutch' },
      { type: 'image', src: '/images/woodworking/nestSideTables-1.JPEG', alt: 'Woodworking Project 12', caption: 'Nesting side tables' },
      { type: 'image', src: '/images/woodworking/wallhooks-1.JPEG', alt: 'Woodworking Project 14', caption: 'Wooden wall hooks' },
      { type: 'image', src: '/images/woodworking/waveMirror-1.jpg', alt: 'Woodworking Project 15', caption: 'Wave-inspired mirror frame' },
      { type: 'image', src: '/images/woodworking/waveMirror-2.jpg', alt: 'Woodworking Project 16', caption: 'Wave mirror detail' },
    ]
  },
];

const Gallery = () => {
  const [activeSection, setActiveSection] = useState(galleryData[0].section);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);

  const activeItems = galleryData.find(item => item.section === activeSection).items;

  const slides = activeItems.map(item => ({
    type: item.type,
    src: item.src,
    alt: item.alt,
    title: item.caption,
    ...(item.type === 'video' && {
      sources: [{ src: item.src, type: 'video/mp4' }],
      poster: item.poster // Optional: add a poster image for the video
    })
  }));

  const renderThumbnail = (item) => {
    if (item.type === 'image') {
      return <img src={item.src} alt={item.alt} className="w-full rounded-lg shadow-md" />;
    } else if (item.type === 'video') {
      return (
        <div className="relative">
          <video src={item.src} className="w-full rounded-lg shadow-md" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      );
    }
  };

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
            {activeItems.map((item, index) => (
              <motion.div
                key={item.src}
                className="mb-4 cursor-pointer relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setItemIndex(index);
                  setLightboxOpen(true);
                }}
              >
                {renderThumbnail(item)}
                {item.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.caption}
                  </div>
                )}
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        plugins={[Video]}
        index={itemIndex}
      />
    </PageTransition>
  );
};

export default Gallery;
