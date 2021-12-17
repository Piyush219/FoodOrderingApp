import { useContext } from "react";
import Form from "./Form";
import styles from './MealItem.module.css'
import CartContext from "../../../Store/cart-context";


const MealItem = (props) =>{
    const cartCtx = useContext(CartContext);
    // const price = `$${props.price.toFixed(2)}`;
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
          id: props.id,
          name: props.title,
          amount: amount,
          price: props.price,
        });
      };
    return (
        <li className={styles.mealsList}>
            <div>
                <h3 className={styles.title}>{props.title}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>${props.price}</div>
            </div>
            <div>
                <Form onAddToCart = {addToCartHandler}/>
            </div>

        </li>
    )
}

export default MealItem;