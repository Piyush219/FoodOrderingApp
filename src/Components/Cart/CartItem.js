import ReactDom from 'react-dom';
import React from 'react';
import styles from './CartItemModel.module.css'
const CartItem = (props) => {

    const onCloseClick = () => {
        props.onClose(false)
    }

  return ReactDom.createPortal(
    
      <div className={styles.overlay}>
    <div className={styles.cartItemBody}>
      <h4>Sushi</h4>
      <h1>Amount : $24.19</h1>
      <button className = {styles.cartItemBtn} type="button" onClick={onCloseClick}>
        Close
      </button>
      <button className = {styles.cartItemBtn} type="button">Order</button>
    </div>
    </div>,

    document.getElementById('backDrop')
  );
};

export default CartItem;
