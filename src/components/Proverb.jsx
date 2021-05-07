import React, {useState, useEffect} from 'react';

function Proverb() {

  const [proverb, setProverb] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setProverb(quote.content);  
          setAuthor(quote.author);
        }
      )
  },[]);

  let getProverb = () => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setProverb(quote.content);  
          setAuthor(quote.author);
        }
      )
  }
  return (
    <div >
        <button className="btn" onClick={getProverb}>Generate New Proverb</button>
         <div className = "backgroundImage">
            <h2>{proverb}</h2>
            <small>-{author}-</small>
         </div><br />
    </div>
  );
}

export default Proverb;
