import React from 'react';

const Contact = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <form className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;