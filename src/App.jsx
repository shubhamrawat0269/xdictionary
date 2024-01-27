import { useState } from "react";
import "./App.css";

const wordDictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [text, setText] = useState("");
  const [isSubmit, setSubmit] = useState(false);
  const [meaning, setMeaning] = useState("");

  const handleSubmit = () => {
    const wordMeaning = wordDictionary.filter((cur) => {
      if (cur.word.toLowerCase() === text.toLowerCase()) {
        return cur;
      }
    });

    if (wordMeaning.length !== 0) {
      setSubmit(false);
      setMeaning(wordMeaning[0]["meaning"]);
    } else {
      setMeaning("");
      setSubmit(true);
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div className="input--box">
        <input
          type="text"
          placeholder="Search for a word..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>

      <h2>Definition:</h2>
      {meaning.length !== 0 && <p>{meaning}</p>}
      {isSubmit && <p>Word not found in the dictionary.</p>}
    </div>
  );
}

export default App;
