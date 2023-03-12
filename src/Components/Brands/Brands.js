import React from 'react'
import "./Brands.scss"
import kiyim1 from "../../Images/kiyim1.png"
import kiyim2 from "../../Images/kiyim2.png"
import kiyim3 from "../../Images/kiyim3.png"

function Cards2() {
    return (
        <div className='brands'>
            <h1>From the blog</h1>
            <p>here are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
            <p>alteration in some form, by injected humour</p>

            <div className="box">
                <div className="card1">
                    <img src={kiyim1} alt="" />
                    <div className="text">
                        <span>DESIGN JULY 11, 2021</span>
                        <p>2021’S Biggest Sneaker Is Getting Us So Pumped For</p>
                        <p>Summer</p>
                    </div>
                </div>
                <div className="card2">
                    <img src={kiyim2} alt="" />
                    <div className="dark">
                        <span>DESIGN JULY 11, 2021</span>
                        <p>2021’S Biggest Sneaker Is Getting Us So</p>
                        <p>Pumped For Summer</p>
                        <button>View More</button>
                    </div>
                </div>
                <div className="card1">
                    <img src={kiyim3} alt="" />
                    <div className="text">
                        <span>DESIGN JULY 11, 2021</span>
                        <p>2021’S Biggest Sneaker Is Getting Us So Pumped For</p>
                        <p>Summer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards2
