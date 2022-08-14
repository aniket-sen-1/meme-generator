import React from "react";
import memesData from "../data/memesData";

export default function Meme() {
  const [url, setUrl] = React.useState(
    "https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg?crop=1xw:0.8888888888888888xh;center,top&resize=1200:*"
  );
  function getMemeImage() {
    console.log("--------");
    const memeArray = memesData.data.memes;
    let rendomNumber = Math.floor(Math.random() * 100);
    let rendomMeme = memeArray[rendomNumber].url;
    console.log(rendomMeme);
    setUrl(rendomMeme);
  }
  return (
    <section className="meme container">
      <form className="form">
        <input type="text" placeholder="Top Text" className="form--input" />
        <input type="text" placeholder="Bottom Text" className="form--input" />
        <button type="button" className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </form>
      <img className="meme--image" src={url} alt="images" />
    </section>
  );
}
