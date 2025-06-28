import React from 'react';

const HooksLesson = () => (
  <div>
    <h3 className="text-xl font-semibold mb-2">React Hooks</h3>
    <p className="text-white-500 mb-4">
      Hooks are functions that let you “hook into” React state and lifecycle features from function components.
    </p>

    <h4 className="text-lg font-medium mt-4">🧩 Commonly Used Hooks</h4>
    <ul className="list-disc ml-6 text-white-500 mb-4">
      <li><strong>useState</strong> – Adds local state to a component</li>
      <li><strong>useEffect</strong> – Handles side effects like data fetching</li>
      <li><strong>useContext</strong> – Access context without wrapping components</li>
    </ul>

    <h4 className="text-lg font-medium mt-4">🧠 useState Example</h4>
    <pre className="bg-gray-100 p-3 rounded text-sm text-gray-800 overflow-auto">
{`const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Clicked {count} times
</button>`}
    </pre>

    <h4 className="text-lg font-medium mt-4">📌 Why Hooks?</h4>
    <p className="text-white-500 mb-4">
      Hooks simplify code by reducing the need for class components and enable better reuse of logic.
    </p>

    <h4 className="text-lg font-medium mt-4">🛠 Try This</h4>
    <ul className="list-disc ml-6 text-white-500">
      <li>Use <code>useState</code> to create a toggle button.</li>
      <li>Use <code>useEffect</code> to fetch data from an API on mount.</li>
    </ul>
  </div>
);

export default HooksLesson;