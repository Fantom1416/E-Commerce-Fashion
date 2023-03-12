import React from 'react'
import "./Banner.scss"
import idn from "../../Images/idn.png"

function Banner() {
    return (
        <div className='banner'>
            <div className="fon">
                <div className="box">
                    <h1>Super discount for your first purchase</h1>
                    <button>FREE10DELIVERY</button>
                    <h2>Use discount code in checkout!</h2>
                </div>
            </div>
        </div>
    )
}

export default Banner
