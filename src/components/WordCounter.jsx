import { useState } from "react";
function WordCounter() {
  const [wordCount, setWordCount] = useState(0);

  const handleOnChange = (e) => {
    let text = e.target.value;
    let words = text.split(" ");
    let filteredWords = words.filter((word) => {
      return word !== "";
    });
    setWordCount(filteredWords.length);
  };

  return (
    <div className="bg-light text-dark shadow p-2" style={{ maxWidth: "650px", marginTop: '200px', marginLeft: '100px' }}>
      <h1 className="text-center">Responsive Paragraph Word Counter</h1>
      <div className="text-center">
        <textarea
          className="fs-4 p-2 bg-light text-dark shadow"
          name="inp"
          id="inp"
          cols="50"
          rows="5"
          onChange={handleOnChange}
          placeholder="Type or paste your paragraph here..."
        ></textarea>
      </div>
      <p className="text-secondary fs-4 ms-4">Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
