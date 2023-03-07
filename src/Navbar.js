import logo from "./images/Troll Face.png"

export default function Navbar(){
    return(
        <div className="navbar">
            <img src={logo} width="50"></img>
            <h1>Meme Generator</h1>
            <h3>React project - 3</h3>
        </div>
    )
}