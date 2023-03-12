import React from 'react'
import "./Footer.scss"
import socials from "../../Images/socials.png"

function Footer() {
    return (
        <footer>
            <div className="first">
                <h1>ebRaw</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                <p>do eiusmod tempor incididunt ut labore.</p>
                <img src={socials} alt="" />
                <a href="#">Check our shop in Google Map</a>
            </div>
            <div className="colona">
                <h1>Support Links</h1>
                <h2>Product Guides</h2>
                <h2>Terms & Conditions</h2>
                <h2>Delivery Policy</h2>
                <h2>Privacy Policy</h2>
                <h2>Feedback</h2>
            </div>
            <div className="colona">
                <h1>Quick Links</h1>
                <h2>Product Guides</h2>
                <h2>Terms & Conditions</h2>
                <h2>Delivery Policy</h2>
                <h2>Privacy Policy</h2>
                <h2>Feedback</h2>
            </div>
            <div className="colona">
                <h1>Company</h1>
                <h2>Product Guides</h2>
                <h2>Terms & Conditions</h2>
                <h2>Delivery Policy</h2>
                <h2>Privacy Policy</h2>
                <h2>Feedback</h2>
            </div>
            <div className="colona">
                <h1>Help</h1>
                <h2>Product Guides</h2>
                <h2>Terms & Conditions</h2>
                <h2>Delivery Policy</h2>
                <h2>Privacy Policy</h2>
                <h2>Feedback</h2>
            </div>
        </footer>
    )
}

export default Footer
