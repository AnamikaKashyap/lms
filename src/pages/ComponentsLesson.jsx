import React from 'react';

const ComponentsLesson = () => (
  <div>
    <h3 className="text-xl font-semibold mb-2">Understanding React Components</h3>
    <p className="text-white-500 mb-4">
      Components are the building blocks of any React application. They allow you to split the UI into independent, reusable pieces.
    </p>

    <h4 className="text-lg font-medium mt-4">📦 Types of Components</h4>
    <ul className="list-disc ml-6 text-white-500 mb-4">
      <li><strong>Functional Components</strong> – JavaScript functions that return JSX</li>
      <li><strong>Class Components</strong> – Use ES6 classes, support more features but are less common today</li>
    </ul>

    <h4 className="text-lg font-medium mt-4">🧱 Component Example</h4>
    <pre className="bg-gray-100 p-3 rounded text-sm text-gray-800 overflow-auto">
{`function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}`}
    </pre>

    <h4 className="text-lg font-medium mt-4">🔁 Props</h4>
    <p className="text-white-500 mb-4">
      Props are inputs to components. They allow data to be passed from parent to child components.
    </p>

    <h4 className="text-lg font-medium mt-4">🛠 Practice</h4>
    <ul className="list-disc ml-6 text-white-500">
      <li>Create a Button component that receives text as props.</li>
      <li>Reuse the Button component in different parts of your app.</li>
    </ul>
  </div>
);

export default ComponentsLesson;