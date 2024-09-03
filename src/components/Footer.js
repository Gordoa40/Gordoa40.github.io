import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          {['tiktok', 'youtube', 'linkedin', 'github'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className={`fab fa-${social} text-2xl`}></i>
            </a>
          ))}
        </div>
        <p>&copy; 2024 Adam Gordon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;