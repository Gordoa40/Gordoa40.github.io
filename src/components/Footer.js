import React from 'react';

const Footer = () => {
  const socialLinks = [
    { name: 'tiktok', url: 'https://www.tiktok.com/@adamgmakes' },
    { name: 'youtube', url: 'https://www.youtube.com/@AdamGMakes' },
    { name: 'instagram', url: 'https://www.instagram.com/adamgmakes/'},
    { name: 'linkedin', url: 'https://www.linkedin.com/in/adam-gordon1/' },
    { name: 'github', url: 'https://github.com/Gordoa40' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className={`fab fa-${social.name} text-2xl`}></i>
            </a>
          ))}
        </div>
        <p>&copy; 2024 Adam Gordon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;