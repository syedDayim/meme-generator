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

    function handleChange(event){
      const {name, value} = event.target

      setMeme(prevMeme => ({
        ...prevMeme,
        [name] : value
      }))
      console.log(meme)

    }
 
    return (
    <div className="main-page">
      <div className="form"> 

        <input 
        type="text" 
        className="form-input" 
        placeholder="Top text"
        name="topText"
        value={meme.topText}
        onChange={handleChange}
        />

        <input 
        type="text" 
        className="form-input" 
        placeholder="Bottom Text"
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}      
        />

        <button className="form-button" onClick={handleClick}>Get a new meme image</button>


      </div>
      <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </div>
  );
}
