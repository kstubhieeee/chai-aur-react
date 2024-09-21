import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg bg-white py-2 px-3 rounded-xl">
          <button
            className="outline-none text-white rounded-full mr-4 px-4 py-1 shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="outline-none text-white rounded-full mr-4 px-4 py-1 shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="outline-none text-white rounded-full mr-4 px-4 py-1 shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="outline-none text-black rounded-full mr-4 px-4 py-1 shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="outline-none text-white rounded-full mr-4 px-4 py-1 shadow-lg"
            style={{ backgroundColor: "Purple" }}
            onClick={() => {
              setColor("purple");
            }}
          >
            Purple
          </button>
          <button
            className="outline-none text-black rounded-full  px-4 py-1 shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={() => {
              setColor("pink");
            }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
