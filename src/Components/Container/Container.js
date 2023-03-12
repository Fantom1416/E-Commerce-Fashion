import React from 'react'
import "./Container.scss"
import nordwood from "../../Images/nordwood.png"
import kurtka from "../../Images/kurtka.png"

function Container() {
    return (
        <div className='container'>
            <div className="left">
                <div className="text">
                    <span>New Inspirations</span>
                    <h1 className='h11'>Man</h1>
                    <h1>Collection 2022</h1>
                    <p>Trendy for man and woman collections</p>
                    <button>Shop Now</button>
                </div>
                <div className="sliders">
                    <div className="slider1"></div>
                    <div className="slider2"></div>
                    <div className="slider1"></div>
                </div>
            </div>
            <div className="right">
                <img className='img1' src={nordwood} alt="" />
                <img className='kurtka' src={kurtka} alt="" />
            </div>
        </div>
    )
}

export default Container
