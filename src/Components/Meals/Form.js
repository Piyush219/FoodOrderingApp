import styles from './Form.module.css'

const Form = () => {
  return (
    <form>
      <label htmlFor='mealInput' className={styles.formLabel}>Amount: </label>
      <input id='mealInput' className={styles.formInput} type="number" /><br/>
      <button className={styles.formBtn} type="button">+ADD</button>
    </form>
  );
};

export default Form;
