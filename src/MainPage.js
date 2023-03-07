import { useState } from "react"
import meme from "./memeData"

export default function MainPage() {
    const [randomMemes, setRandomMemes] = useState("")
    function handleClick(){
        // meme.data.memes[].url
        let memeArray = meme.data.memes
        let random = Math.floor(Math.random() * memeArray.length)
        setRandomMemes(memeArray[random].url)

    }
 
    return (
    <div className="main-page">
      <div className="form">
        <input type="text" className="form-input" placeholder="Enter first text"/>
        <input type="text" className="form-input" placeholder="Enter ending text"/>
        <button className="form-button" onClick={handleClick}>Get a new meme image</button>


      </div>

      <img className="meme-images" src={randomMemes}></img>
    </div>
  );
}
