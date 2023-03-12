import React from 'react'
import "./Categories.scss"
import cat1 from "../../Images/cat1.png"
import cat2 from "../../Images/cat2.png"
import cat3 from "../../Images/cat3.png"
import cat4 from "../../Images/cat4.png"


function Categories() {
    return (
        <div className='categories'>
            <img src={cat1} alt="" />
            <img src={cat2} alt="" />
            <img src={cat3} alt="" />
            <img src={cat4} alt="" />
        </div>
    )
}

export default Categories
