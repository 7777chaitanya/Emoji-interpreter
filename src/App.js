import { useState } from "react";
import "./styles.css";

var emojis = {
  "😊": "Smiling",
  "😔": "Dull Face",
  "❤️": "Heart",
  "😑": "No Answer",
  "😎": "Cool",
  "😘": "Kiss",
  "😍": "Heart Eyes"
};

var emojiList = Object.keys(emojis);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");
  function clickedEmoji(emoji) {
    console.log("called sir");
    return setEmojiMeaning(emojis[emoji]);
  }

  function emojiEntered(event) {
    let meaningOutput = event.target.value;
    setEmojiMeaning(emojis[event.target.value]);
    if (meaningOutput === undefined) {
      setEmojiMeaning("This emoji is not in our database.");
    }
  }
  return (
    <div className="App">
      <div
        style={{
          alignContent: "center",
          width: "100%",
          height: "80%",
          margin: "auto",
          marginTop: "10rem"
        }}
      >
        <h1 style={{ color: "gray", margin: "2rem" }}>
          <strong>
            👾<em>Emoji Interpreter</em>👾
          </strong>
        </h1>
        <input
          onChange={() => emojiEntered(event)}
          style={{
            width: "50%",
            textAlign: "center",
            fontSize: "1rem",
            lineHeight: "2rem",
            marginBottom: "1.2rem"
          }}
          placeholder="Enter your smiley here!"
        ></input>
        <h2 style={{ marginBottom: "1.1rem" }}>{emojiMeaning}</h2>
        <h3>These are the emoji's we accept</h3>

        {emojiList.map(function (emoji) {
          return (
            <span
              onClick={() => clickedEmoji(emoji)}
              style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
