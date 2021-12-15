import { Fragment } from "react/cjs/react.production.min";
import DummyMeals from "./Components/Layout/DummyMeals";
import Header from "./Components/Layout/Header";
import RestaurentSummary from "./Components/Layout/RestaurentSummary";

function App() {

  const dummyMeals = [{
    title: 'Sushi',
    description: 'Finest Fish and Viggies',
    amount: '22.99'
  },
  {
    title: 'Schnitzel',
    description: 'A German Speciality',
    amount: '15.50'
  },
  {
    title: 'Barbecue Burger',
    description: 'American, raw, meaty',
    amount: '12.99'
  },
  {
    title: 'Green Bowl',
    description: 'Healthy...and green...',
    amount: '20.99'
  }]

  return (
    <Fragment>
      <Header />
      <RestaurentSummary />
      <DummyMeals meals = {dummyMeals} />
    </Fragment>
  );
}

export default App;
