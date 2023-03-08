import { useState } from "react"
import memeData from "./memeData"

export default function MainPage(){    
    const [meme, setMeme ] = useState({
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/34vt4i.jpg"
    });

    const [allMemeImages, setAllMemeImages] = useState(memeData)



    function handleClick(){
        // meme.data.memes[].url
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * 100)
        const url = memeArray[randomNumber].url
        setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
        }))
    }
 
    return (
    <div className="main-page">
      <div className="form">

        <input 
        type="text" 
        className="form-input" 
        placeholder="Top text"
        />

        <input 
        type="text" 
        className="form-input" 
        placeholder="Bottom Text"
        />

        <button className="form-button" onClick={handleClick}>Get a new meme image</button>


      </div>

      <img className="meme-images" src={meme.randomImage}></img>
    </div>
  );
}
