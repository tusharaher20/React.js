import { useState, useCallback } from "react";

export default function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`~!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      let char = str[Math.floor(Math.random() * str.length)];
      pass += char;
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const handleLengthChange = (e) => {
    setLength(parseInt(e.target.value, 10));
  };

  const handleNumberChange = () => {
    setNumberAllowed(!numberAllowed);
  };

  const handleCharChange = () => {
    setCharAllowed(!charAllowed);
  };

  const handleCopyClick = () => {
    const textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  return (
    <div className="text-center mt-10 mx-auto max-w-md p-4">
      <h1 className="text-4xl font-bold text-teal-600 underline mb-6">
        Password Generator
      </h1>
      <div className="flex justify-center items-center mb-6">
        <label className="mr-3 text-lg bg-teal-600	">Password Length:</label>
        <input
          type="range"
          min="6"
          max="20"
          value={length}
          onChange={handleLengthChange} // Use onChange instead of onInput
          className="mr-3"
        />
        <span className="text-lg bg-teal-600	">{length}</span>
      </div>
      <div className="flex justify-center items-center mb-6">
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={handleNumberChange}
          className="mr-2"
        />
        <label className="mr-3 text-lg bg-teal-600	">Include Numbers</label>
        <input
          type="checkbox"
          checked={charAllowed}
          onChange={handleCharChange}
          className="mr-2"
        />
        <label className="text-lg bg-teal-600	">Include Special Characters</label>
      </div>
      <div>
        <button onClick={passwordGenerator} className="btn btn-primary m-2">
          Generate Password
        </button>
        <button onClick={handleCopyClick} className="btn btn-success m-2">
          Copy Password
        </button>
      </div>
      <div className="password-display bg-white p-6 mt-6 rounded shadow-md">
        <p className="text-xl mb-0 ">Generated Password:</p>
        <pre className="m-0 text-lg">{password}</pre>
      </div>
    </div>
  );
}
