import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img className="header--image" src={require('../images/troll-face.png')} alt="" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Project</h4>
        </header>
    )
}