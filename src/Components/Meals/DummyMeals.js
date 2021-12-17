import styles from "./DummyMeals.module.css";
import Form from "./Form";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";


const dummyMeals = [
  {
    id: "e1",
    title: "Sushi",
    description: "Finest Fish and Viggies",
    amount: "22.99",
  },
  {
    id: "e2",
    title: "Schnitzel",
    description: "A German Speciality",
    amount: "15.50",
  },
  {
    id: "e3",
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    amount: "12.99",
  },
  {
    id: "e4",
    title: "Green Bowl",
    description: "Healthy...and green...",
    amount: "20.99",
  },
];

const DummyMeals = () => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: dummyMeals.id,
      name: dummyMeals.title,
      amount: amount,
      price: dummyMeals.price
    })
  }
  return (
    <section className={styles.dummymeal}>
      <ul className={styles.UlistMeals}>
        {dummyMeals.map((item) => {
          return (
            <li className={styles.mealsList} key={item.id} id={item.id}>
              <div>
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.description}>{item.description}</p>
                <h3 className={styles.amount}>${item.amount}</h3>
              </div>
              <div>
                <Form onAddToCart = {addToCartHandler}/>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DummyMeals;
