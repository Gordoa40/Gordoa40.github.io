import React, { useState, useEffect} from 'react';
import { setPageTitle } from '../utils';
import PageTransition from './PageTransition';

const Contact = () => {
  useEffect(() => {
    setPageTitle('Contact');
  }, []);
  const [status, setStatus] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch('https://formspree.io/f/xwpezovq', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      setStatus("Thanks for your submission!");
      form.reset();
    } else {
      setStatus("Oops! There was a problem submitting your form");
    }
  };

  return (
    <PageTransition>
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Get in Touch</h2>
        <form onSubmit={submitForm} className="max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full mb-4 p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full mb-4 p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full mb-4 p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-center dark:text-white">{status}</p>}
      </div>
    </section>
    </PageTransition>
  );
};

export default Contact;