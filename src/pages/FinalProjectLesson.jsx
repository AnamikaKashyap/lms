import React from 'react';


const FinalProjectLesson = () => (
  <div>
    <h3 className="text-xl font-semibold mb-2">Final Project: Build a Mini LMS</h3>
    <p className="text-white-500 mb-4">
      In this final project, you'll build a mini Learning Management System using all the concepts learned in the course.
    </p>

    <h4 className="text-lg font-medium mt-4">📋 Features to Include</h4>
    <ul className="list-disc ml-6 text-white-500 mb-4">
      <li>Course listing and details page</li>
      <li>Lesson navigation</li>
      <li>Progress tracking</li>
      <li>Enrollment functionality</li>
      <li>Context API for global state</li>
    </ul>

    <h4 className="text-lg font-medium mt-4">🛠 Suggested Tech Stack</h4>
    <ul className="list-disc ml-6 text-white-500 mb-4">
      <li>React (Functional Components + Hooks)</li>
      <li>React Router</li>
      <li>Context API</li>
      <li>Tailwind CSS or custom styling</li>
    </ul>

    <h4 className="text-lg font-medium mt-4">📦 Project Structure</h4>
    <pre className="bg-gray-100 p-3 rounded text-sm text-gray-800 overflow-auto">
{`/components
  - CourseCard.js
  - EnrollmentButton.js
/pages
  - CourseDetails.js
  - LessonPage.js
/context
  - EnrollmentContext.js
/services
  - api.js`}
    </pre>

    <h4 className="text-lg font-medium mt-4">✅ Deliverables</h4>
    <ul className="list-disc ml-6 text-white-500">
      <li>A working LMS app</li>
      <li>Clear navigation and UI</li>
      <li>Proper use of React concepts</li>
    </ul>
  </div>
);

export default FinalProjectLesson;
