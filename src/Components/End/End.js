import React from 'react'
import insta from "../../Images/insta.png"
import insta2 from "../../Images/insta2.png"
import "./End.scss"
import p from "../../Images/p.png"
import p2 from "../../Images/p2.png"

function End() {
    return (
        <div className='end'>
            <div className="top">
                <img src={insta} alt="" />
                <img src={insta2} alt="" />
            </div>
            <div className="bottom">
                <div className="bottom_left">
                    <img src={p} alt="" />
                    <div className="text1">
                        <h2>SAVE UP</h2>
                        <h1>50%</h1>
                        <h2>OFF</h2>
                    </div>
                </div>
                <div className="bottom_right">
                    <img src={p2} alt="" />
                    <div className="text2">
                        <h1>Sign Up Now & Get 10% Off</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                        <p>tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="inputs">
                            <input type="text" placeholder='Enter your email address' />
                            <button>Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default End
