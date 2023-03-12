import React from 'react'
import "./Coments.scss"
import people1 from "../../Images/people1.png"
import people2 from "../../Images/people2.png"
import people3 from "../../Images/people3.png"
import people4 from "../../Images/people4.png"
import star from "../../Images/star.png"
import slider from "../../Images/sliders.png"

function Coments() {
    return (
        <div className='coments'>
            <h1>What Say Our Regular Customer</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
            <p>alteration in some form, by injected humour</p>
            <img className='sliders' src={slider} alt="" />

            <div className="coms">
                <div className="com">
                    <div className="stars">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <p>These settings don’t provide big changes</p>
                    <p>but only some small css changes in </p>
                    <p>paces or borders for example.</p>
                    <div className="avatar">
                        <img src={people1} alt="" />
                        <h3>Wade Warren</h3>
                    </div>
                </div>
                <div className="com">
                    <div className="stars">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <p>These settings don’t provide big changes</p>
                    <p>but only some small css changes in </p>
                    <p>paces or borders for example.</p>
                    <div className="avatar">
                        <img src={people2} alt="" />
                        <h3>Wade Warren</h3>
                    </div>
                </div>
                <div className="com">
                    <div className="stars">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <p>These settings don’t provide big changes</p>
                    <p>but only some small css changes in </p>
                    <p>paces or borders for example.</p>
                    <div className="avatar">
                        <img src={people3} alt="" />
                        <h3>Wade Warren</h3>
                    </div>
                </div>
                <div className="com">
                    <div className="stars">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <p>These settings don’t provide big changes</p>
                    <p>but only some small css changes in </p>
                    <p>paces or borders for example.</p>
                    <div className="avatar">
                        <img src={people4} alt="" />
                        <h3>Wade Warren</h3>
                    </div>
                </div>
            </div>

            <div className="slide">
                <div className="slider1"></div>
                <div className="slider2"></div>
                <div className="slider1"></div>
            </div>
        </div>
    )
}

export default Coments
