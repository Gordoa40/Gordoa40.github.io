import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Book, Briefcase, Mail } from 'lucide-react';
import PageTransition from './PageTransition';

const FeatureCard = ({ title, description, icon: Icon, link }) => (
  <motion.div
    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
  >
    <Icon className="w-12 h-12 text-orange-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <Link to={link} className="text-orange-500 hover:text-orange-600 flex items-center">
      Learn More <ArrowRight className="ml-2" />
    </Link>
  </motion.div>
);

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 dark:text-white">Adam Gordon</h1>
              <h2 className="text-2xl md:text-3xl mb-8 text-gray-600 dark:text-gray-300">Engineer | Maker | Content Creator</h2>
              <Link 
                to="/about" 
                className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300"
              >
                Discover My Work
              </Link>
            </motion.div>
          </div>
          {/* Abstract background shapes */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                title="Engineering"
                description="Automating pharmaceutical processes and innovating in biomedical engineering."
                icon={Code}
                link="/projects"
              />
              <FeatureCard
                title="Making"
                description="Crafting unique pieces through woodworking, 3D printing, and more."
                icon={Briefcase}
                link="/portfolio"
              />
              <FeatureCard
                title="Content Creation"
                description="Sharing knowledge and inspiration through TikTok and other platforms."
                icon={Book}
                link="/blog"
              />
              <FeatureCard
                title="Collaboration"
                description="Open to new opportunities and exciting projects. Let's connect!"
                icon={Mail}
                link="/contact"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-400 to-pink-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start a Project?</h2>
            <p className="text-xl mb-8 text-white">Let's bring your ideas to life!</p>
            <Link 
              to="/contact" 
              className="bg-white text-orange-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;