import React from 'react';

const StateManagementLesson = () => (
  <div>
    <h3 className="text-xl font-semibold mb-2">State Management in React</h3>
    <p className="text-white-500 mb-4">
      State management is how you handle and share data in your app. As apps grow, managing state becomes critical.
    </p>

    <h4 className="text-lg font-medium mt-4">📍 Local vs Global State</h4>
    <ul className="list-disc ml-6 text-white-500 mb-4">
      <li><strong>Local State</strong>: Managed within a component using <code>useState</code></li>
      <li><strong>Global State</strong>: Shared across components (e.g., using Context API or Redux)</li>
    </ul>

    <h4 className="text-lg font-medium mt-4">🔧 Context API Example</h4>
    <pre className="bg-gray-100 p-3 rounded text-sm text-gray-800 overflow-auto">
{`const MyContext = React.createContext();

function MyProvider({ children }) {
  const [user, setUser] = useState(null);
  return <MyContext.Provider value={{ user, setUser }}>{children}</MyContext.Provider>;
}`}
    </pre>

    <h4 className="text-lg font-medium mt-4">🏁 Best Practices</h4>
    <ul className="list-disc ml-6 text-white-500 mb-4">
      <li>Lift state up when needed</li>
      <li>Avoid prop drilling using context</li>
      <li>Consider Redux for complex apps</li>
    </ul>

    <h4 className="text-lg font-medium mt-4">🛠 Challenge</h4>
    <ul className="list-disc ml-6 text-white-500">
      <li>Build a simple login context that stores the current user name.</li>
      <li>Share the user info across a profile and dashboard page.</li>
    </ul>
  </div>
);

export default StateManagementLesson;
