import styles from "./DummyMeals.module.css";
// import { useContext } from "react";
// import CartContext from "../../Store/cart-context";
import MealItem from "./MealItem/MealItem";

const dummyMeals = [
  {
    id: "e1",
    title: "Sushi",
    description: "Finest Fish and Viggies",
    price: "22.99",
  },
  {
    id: "e2",
    title: "Schnitzel",
    description: "A German Speciality",
    price: "15.50",
  },
  {
    id: "e3",
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: "12.99",
  },
  {
    id: "e4",
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: "20.99",
  },
];

const DummyMeals = () => {
  // const cartCtx = useContext(CartContext);

  // const addToCartHandler = (amount) => {
  //   cartCtx.addItem({
  //     id: dummyMeals.id,
  //     name: dummyMeals.title,
  //     amount: amount,
  //     price: dummyMeals.price,
  //   });
  // };

  const mealsList = dummyMeals.map((item) => (
    <MealItem
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <section className={styles.dummymeal}>
      <ul className={styles.UlistMeals}>
        {mealsList}

        {/* {dummyMeals.map((item) => {
          return (
            <li className={styles.mealsList} key={item.id} id={item.id}>
              <div>
                <h4 >{item.title}</h4>
                <p className={styles.description}>{item.description}</p>
                <h3 className={styles.amount}>${item.amount}</h3>
              </div>
              <div>
                <Form onAddToCart = {addToCartHandler}/>
              </div>
            </li>
          );
        })} */}
      </ul>
    </section>
  );
};

export default DummyMeals;
