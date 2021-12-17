import React, {useContext } from "react";
// import CartItem from "../Cart/CartItem";
import styles from './HeaderButton.module.css'
import CartContext from "../../Store/cart-context";

const HeaderButton = (props) => {

    const cartCtx = useContext(CartContext);
    const numberOfcartItem = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

  return (
    <div>
      <button className={styles.headerBtn} type="button" onClick={props.onClick}>
        Your Cart {numberOfcartItem}
      </button>
      {/* {cartItem && <CartItem onClose={setCartItem} />} */}
    </div>
  );
};

export default HeaderButton;
