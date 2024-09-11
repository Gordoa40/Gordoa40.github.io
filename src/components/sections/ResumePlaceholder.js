import React from 'react';
import { FileText } from 'lucide-react';

const ResumePlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <FileText className="w-24 h-24 mx-auto text-orange-500" />
        </div>
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Work in Progress</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          My interactive resume is currently under construction. Check back later! In the meantime, feel free to view my PDF resume.
        </p>
        <a
          href={`${window.location.origin}/adam_gordon_resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
        >
          Download PDF Resume
        </a>
      </div>
    </div>
  );
};

export default ResumePlaceholder;