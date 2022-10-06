import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bgw.jpg",
  });

  const [allMemes, setAllMemes] = React.useState();
  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function setText(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  console.log(meme.randomImage);
  return (
    <section className="meme container">
      <form className="form">
        <input
          type="text"
          placeholder="Top Text"
          name="topText"
          onChange={setText}
          className="form--input"
        />
        <input
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          onChange={setText}
          className="form--input"
        />
        <button type="button" className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </form>

      <div className="meme--box">
        <img className="meme--box--image" src={meme.randomImage} alt="images" />
        <h2 className="meme--box--text top">{meme.topText}</h2>
        <h2 className="meme--box--text bottom">{meme.bottomText}</h2>
      </div>
    </section>
  );
}
