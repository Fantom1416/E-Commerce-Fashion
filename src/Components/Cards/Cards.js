import React from 'react'
import "./Cards.scss"
import dress1 from "../../Images/dress1.png"
import dress2 from "../../Images/dress2.png"
import dress3 from "../../Images/dress3.png"
import dress4 from "../../Images/dress4.png"
import dress5 from "../../Images/dress5.png"
import dress6 from "../../Images/dress6.png"
import link from "../../Images/link2.png"



function Cards() {
    return (
        <div className='cards'>
            <div className="top">
                <div className="card">
                    <img src={dress1} alt="" />
                    <div className="text">
                        <h1>Man Sweet Hoodie</h1>
                        <button>Add to cart</button>
                        <span>* * * * *</span>
                        <p>$150.00</p>
                    </div>
                </div>
                <div className="card">
                    <img src={dress2} alt="" />
                    <div className="text">
                        <h1>Man Summer Sweet Hoodie</h1>
                        <button>Add to cart</button>
                        <span>* * * * *</span>
                        <p>$150.00</p>
                    </div>
                </div>
                <div className="card">
                    <img src={dress3} alt="" />
                    <div className="text">
                        <h1>Man Sweet Hoodie</h1>
                        <button>Add to cart</button>
                        <span>* * * * *</span>
                        <p>$150.00</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="card">
                    <img src={dress4} alt="" />
                    <div className="text">
                        <h1>Woman Sweet Hoodie</h1>
                        <button>Add to cart</button>
                        <span>* * * * *</span>
                        <p>$250.00</p>
                    </div>
                </div>
                <div className="card">
                    <img src={dress5} alt="" />
                    <div className="text">
                        <h1>Woman Hoodie</h1>
                        <button className='btn5'>Add to cart</button>
                        <span className='span5'>* * * * *</span>
                        <p>$150.00</p>
                    </div>
                    <img className='link' src={link} alt="" />
                </div>
                <div className="card">
                    <img src={dress6} alt="" />
                    <div className="text">
                        <h1>Man Hoodie</h1>
                        <button>Add to cart</button>
                        <span>* * * * *</span>
                        <p>$150.00</p>
                    </div>
                </div>
            </div>

            <button className='view'>View All</button>
        </div>
    )
}

export default Cards
