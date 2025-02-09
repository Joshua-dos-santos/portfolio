import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="flex space-x-4 my-6"></div>
        <h1 className="text-4xl font-bold text-gray-800">Vite + React</h1>
        <div className="mt-4 p-4 bg-white rounded-lg shadow-lg">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            count is {count}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
