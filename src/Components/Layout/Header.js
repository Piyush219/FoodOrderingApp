import React, { Fragment } from "react";
import "./Header.css";
import HeaderButton from "./HeaderButton";
import meals from "./meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className="headerBody">
        <h1 className="headertxt">ReactMeals</h1>
        <HeaderButton onClick ={props.onShowCart} />
      </header>

      <div className="headerImg">
        <img src={meals} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
