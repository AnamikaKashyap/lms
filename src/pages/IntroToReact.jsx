import React from 'react';

const IntroToReact = () => (
  <div>
    <h3 className="text-xl font-semibold mb-2">What is React?</h3>
    <p className="text-white-500 mb-4">
      React is a powerful and popular JavaScript library used to build user interfaces, particularly for single-page applications. It was developed by Facebook and is maintained as an open-source project.
    </p>

    <h4 className="text-lg font-medium mt-4">🔍 Key Features of React:</h4>
    <ul className="list-disc ml-6 text-white-500 mb-4">
      <li>Virtual DOM for faster rendering</li>
      <li>Component-based architecture</li>
      <li>Unidirectional data flow</li>
      <li>Reusable and testable components</li>
      <li>Rich ecosystem and community</li>
    </ul>

    <h4 className="text-lg font-medium mt-4">📦 Why Use React?</h4>
    <p className="text-white-500 mb-4">
      React enables developers to create large web applications that can change data, without reloading the page. Its goal is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template.
    </p>

    <h4 className="text-lg font-medium mt-4">⚙️ Simple React Example</h4>
    <pre className="bg-gray-100 p-3 rounded text-sm text-gray-800 overflow-auto">
{`import React from 'react';

function Welcome() {
  return <h1>Hello, React!</h1>;
}

export default Welcome;`}
    </pre>

    <h4 className="text-lg font-medium mt-4">📚 Real-world Applications Built With React:</h4>
    <ul className="list-disc ml-6 text-white-500 mb-4">
      <li>Facebook</li>
      <li>Instagram</li>
      <li>Netflix</li>
      <li>Airbnb</li>
      <li>WhatsApp Web</li>
    </ul>

    <p className="text-white-500 mt-4">
      In the next lesson, you'll dive into how to build your own components and manage structure in a React app.
    </p>
  </div>
);

export default IntroToReact;
