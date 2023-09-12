import React from "react";

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <h1 id='logo'>Namaste Biriyani</h1>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li><i class="fa-solid fa-cart-shopping"></i></li>
                </ul>
            </div>
        </div>
    );
};

export default Header