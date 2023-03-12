import React from 'react'
import "./Navbar.scss"
import Icons from "../../Images/icons.png"

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h1>ebRaw</h1>
            </div>
            <div className="input">
                <input type="text" placeholder='Search in 20,000 Products...' />
                <button>Search</button>
            </div>
            <img src={Icons} alt="" />
        </nav>
    )
}

export default Navbar
