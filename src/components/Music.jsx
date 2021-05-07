import React, {useState, useEffect} from 'react';

function Music() {

  const [music, setMusic] = useState("");

  useEffect(() => {
    fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/")
      .then(res => res.json())
      .then(
        (music) => {
          setMusic(music);  
        }
      )
  },[]);

  let getGenre = () => {
    fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/")
      .then(res => res.json())
      .then(
        (music) => {
          setMusic(music);
        }
      )
  }
  return (
    <div >
        <button className="btn" onClick={getGenre}>Generate New Genre</button>
         <div className = "music">
            <h2>{music}</h2>
         </div><br />
    </div>
  );
}

export default Music;