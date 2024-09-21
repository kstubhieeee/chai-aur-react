/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Yahase password generator function start hota hai, now you would think ki
  // password generator function ke andar useCallback kyu use nai kiya
  // yahape memoization ka concept aata hai , isiliye andar nai kr skte
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str = str + "0123456789";
    }

    if (charAllowed) {
      str = str + "!@#$%^&*(){}[]-_|?~`";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass = pass + str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    //select method se text selection ka effect dikhega
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //useEffect dekhta hai ki ham koi variable ko ched rahe hai ki nai
  // if ched rahe hai then ye wapas wapas call hota jayega
  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed, PasswordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          readOnly
          placeholder="Password"
          value={password}
          className="outline-none w-full py-1 px-3"
          // passwordRef ham use karre hai kyuki ham selection ka effect dikha sake
          ref={passwordRef}
        />
        <button
          onClick={copyToClipboard}
          className="bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            onChange={(event) => {
              setLength(event.target.value);
            }}
            min={8}
            max={100}
            value={length}
          />
          <label className="font-bold">Length : {length}</label>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className="ml-2"
              onChange={() => {
                setCharAllowed((prevValue) => !prevValue);
              }}
            />
            <label className="font-bold">Characters</label>
            <input
              type="checkbox"
              className="ml-2"
              onChange={() => {
                //yahape mai try krra tha ki (prevValue)=>{!prevValue}
                //iss format mei likhu, but woh syntax wrong hai
                // shayad se woh usse object bana deta hai
                setNumberAllowed((prevValue) => !prevValue);
              }}
            />
            <label className="font-bold">Numbers</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
