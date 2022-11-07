import { useState, useEffect } from "react";

function App() {
  const [word, setWord] = useState("");

  const reg = new RegExp(/[aeiou]/gi);

  return (
    <div className="App">
      <main className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-1xl">Original Word : {word}</h1>
        <h1 className="font-bold text-1xl">
          Reverse Word : {word.split("").reverse().join("")}
        </h1>
        <h1 className="font-bold text-1xl">Count Word : {word.length}</h1>
        <h1 className="font-bold text-1xl">
          i Word : {word.toLocaleLowerCase().replace(reg, "i")}
        </h1>
        <input
          className="mt-5 border-solid border-2 border-black rounded-lg p-2"
          type="text"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
      </main>
    </div>
  );
}

export default App;
