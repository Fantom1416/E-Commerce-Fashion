import React from 'react'
import "./Undernav.scss"

function Undernav() {
    return (
        <div className='undernav'>
            <div className="left">
                <h3>All Departments</h3>
            </div>
            <div className="center">
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Categories</li>
                    <li>Man</li>
                    <li>Woman</li>
                    <li>Accesories</li>
                    <li>Blog</li>
                    <li>Page</li>
                    <li>Elements</li>
                </ul>
            </div>
            <div className="right">
                <h3>Recent Viewed</h3>
            </div>
        </div>
    )
}

export default Undernav
