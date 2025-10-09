import { useState, useCallback,useEffect,useRef } from "react";
import "./index.css";

function App() {
  const [length, setLength] = useState(10);
  const [numberAlowed, setNumberAllowed] = useState(false);
  const [chrAllowed, setchrAllowed] = useState(false);
  const [Passwoed, setPassword] = useState("");
  //useRef Hook
  const passwordRef=useRef(null);
  
  //function to generate password

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAlowed) {
      str += "0123456789";
    }
    if (chrAllowed) {
      str += "!@#$%^&*()_+";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAlowed, chrAllowed, setPassword]);
 
  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(Passwoed);
    passwordRef.current?.select();  
    passwordRef.current?.setSelectionRange(0, 99);
  }
  , [Passwoed]);
    

//useEffect Hook
useEffect(() => {
  generatePassword();
}, [length,numberAlowed,chrAllowed,generatePassword]);


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-2xl font-bold text-center mb-4">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Passwoed}
            className=" outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 transition-colors duration-300">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAlowed} id="numberinput" onChange={() => setNumberAllowed((prev) => !prev)} />
            <label htmlFor="numbetinput">Number</label>
          </div>
          <div className="flex items-center gap-x-1"> 
            <input type="checkbox" defaultChecked={chrAllowed} id="chrinput" onChange={() => setchrAllowed((prev) => !prev)} />
            <label htmlFor="chrinput">Character</label>
          </div>        
        </div>
      </div>
    </>
  );
}

export default App;
