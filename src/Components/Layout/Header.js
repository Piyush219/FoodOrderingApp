import React from "react";
import './Header.css'
import meals from './meals.jpg';

const Header = () =>{
    return (
        <div >
            <div className="headerBody">
            <h1 className="header">ReactMeals</h1>
            <button className="headerBtn" type="button">Your Cart 0</button>
            </div>
            <div>
            <img className="headerImg" src={meals} alt="meals"/>
            </div>
        </div>
    )
}

export default Header;