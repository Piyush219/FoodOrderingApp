import styles from './DummyMeals.module.css'
const DummyMeals = (props) => {
    return (
        <ul className={styles.dummymeal}>
            {props.meals.map((item) => {
                return (
                    <li>
                        <h4>{item.title}</h4>
                        <p className={styles.description}>{item.description}</p>
                        <h3>${item.amount}</h3>
                        <br/>
                    </li>
                    
                )
            })}
        </ul>
    )
}

export default DummyMeals;