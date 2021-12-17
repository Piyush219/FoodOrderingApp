import { useRef, useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return;
    }
    props.onAddToCart(enteredAmountNumber)
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="mealInput" className={styles.formLabel}>
        Amount:{" "}
      </label>
      <input
        ref={amountInputRef}
        type="number"
        defaultValue="1"
        min="1"
        max="5"
        id="mealInput"
        className={styles.formInput}
      />
      <button className={styles.formBtn} type="submit">
        +ADD
      </button>
      {!amountIsValid && <p>Please Enter a Valid Amount (1-5).</p>}
    </form>
  );
};

export default Form;
