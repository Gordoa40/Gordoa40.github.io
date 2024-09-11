import React from 'react';
import PageTransition from './PageTransition';
import ResumePlaceholder from './ResumePlaceholder';

const InteractiveResume = () => {
  return (
    <PageTransition>
      <ResumePlaceholder />
    </PageTransition>
  );
};

export default InteractiveResume;
// import React, { useState } from 'react';
// import PageTransition from './PageTransition';


// const resumeData = {
//   education: [
//     { id: 1, degree: 'B.S. in Biomedical Engineering', institution: 'The University of Texas at Austin', year: '2020-2021' },
//     // Add more education items
//   ],
//   experience: [
//     { id: 1, role: 'MES Engineer', company: 'Emerson', period: '2022 - Present', description: 'Automating pharmaceutical manufacturing processes...' },
//     { id: 2, role: 'Product Design Engineer Intern', company: 'OriGen Biomedical', period: 'July 2020 - June 2021', description: "Created CAD models and drawings in SolidWorks for suite of medical device products, manufacturing fixtures, and thermoformed packaging, supporting product and equipment development and manufacturing. • Designed and prototyped mechanical design of new fixtures to enhance manufacturing efficiency and repeatability, including one that saved over 30 minutes per day in manufacturing floor time.  • Perform quality and mechanical testing on products using instruments such as Instron UTM to ensure compliance with design and industry requirements and regulatory standards (ISO-13485). " },
//     // Add more experience items
//   ],
//   skills: [
//     'Biomedical Engineering', 'Automation', 'Woodworking', '3D Printing', 'CAD', 'Video Production',
//     // Add more skills
//   ],
// };

// const InteractiveResume = () => {
//   const [activeSection, setActiveSection] = useState('education');

//   return (
//     <PageTransition>
//     <section className="py-12 bg-gray-100 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-6 dark:text-white">Interactive Resume</h2>
//         <div className="flex flex-wrap mb-6">
//           {['education', 'experience', 'skills'].map((section) => (
//             <button
//               key={section}
//               onClick={() => setActiveSection(section)}
//               className={`mr-4 mb-2 px-4 py-2 rounded ${
//                 activeSection === section
//                   ? 'bg-blue-500 text-white'
//                   : 'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200'
//               }`}
//             >
//               {section.charAt(0).toUpperCase() + section.slice(1)}
//             </button>
//           ))}
//         </div>
//         <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
//           {activeSection === 'education' && (
//             <ul>
//               {resumeData.education.map((item) => (
//                 <li key={item.id} className="mb-4">
//                   <h3 className="text-lg font-semibold dark:text-white">{item.degree}</h3>
//                   <p className="text-gray-600 dark:text-gray-300">{item.institution}, {item.year}</p>
//                 </li>
//               ))}
//             </ul>
//           )}
//           {activeSection === 'experience' && (
//             <ul>
//               {resumeData.experience.map((item) => (
//                 <li key={item.id} className="mb-4">
//                   <h3 className="text-lg font-semibold dark:text-white">{item.role}</h3>
//                   <p className="text-gray-600 dark:text-gray-300">{item.company}, {item.period}</p>
//                   <p className="text-gray-700 dark:text-gray-200">{item.description}</p>
//                 </li>
//               ))}
//             </ul>
//           )}
//           {activeSection === 'skills' && (
//             <ul className="flex flex-wrap">
//               {resumeData.skills.map((skill, index) => (
//                 <li key={index} className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full mr-2 mb-2">
//                   {skill}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </section>
//     </PageTransition>
//   );
// };

// export default InteractiveResume;