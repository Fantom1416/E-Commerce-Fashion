import React from 'react'
import "./Bigcards.scss"
import qiz from "../../Images/qiz.png"
import bola from "../../Images/bola.png"

function Bigcards() {
    return (
        <div className='bigcards'>
            <div className="left_img">
                <img src={qiz} alt="" />
                <div className="left_text">
                    <span>Top Collection</span>
                    <h3>SHOP WOMANS</h3>
                    <button>Shop Now</button>
                </div>
            </div>
            <div className="right_img">
                <img src={bola} alt="" />
                <div className="right_text">
                    <span>New Collection</span>
                    <h3>SUMMER FASHION</h3>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default Bigcards
