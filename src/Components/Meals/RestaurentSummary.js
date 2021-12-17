import styles from './RestaurentSummary.module.css'

const RestaurentSummary = () =>{
    return (
        
        <div className= {styles.summaryBody}>
            <h2>
                Delicious Food, Delivered To You
            </h2>

            <p className={styles.para}>
                Choose your favourite meal from our broad selection of available
                meals and enjoy a delicious lunch or dinner at home.
                <br />
                All our meals are cooked with high-quality ingredients, just-in-time
                and of course by experienced chefs!
            </p>
        </div>
        
    )
}

export default RestaurentSummary;