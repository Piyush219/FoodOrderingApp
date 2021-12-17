import RestaurentSummary from "./RestaurentSummary";
import DummyMeals from "./DummyMeals";
import { Fragment } from "react/cjs/react.production.min";


const Meals =() =>{
    return(
        <Fragment>
            <RestaurentSummary/>
            <DummyMeals/>
        </Fragment>
    )
}

export default Meals;