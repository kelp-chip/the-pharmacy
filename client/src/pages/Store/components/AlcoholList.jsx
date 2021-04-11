import "../styles/AlcoholList.css";
import Drink from '../components/Drink.jsx'
import { useState } from 'react';

function AlcoholList (props) {
  const [cart] = useState([]);

  function submitToCart(drinkName, drinkPrice, drinkAmt){
    console.log(drinkAmt)
    let price = parseFloat(drinkPrice.toFixed(2)).toFixed(2);
    let totalCost= (price * drinkAmt).toFixed(2)
    cart.push([drinkName, drinkAmt, totalCost]);
    console.log(cart);
  }

  return (
    <div>
      <h1>Welcome to the Pharmacy</h1>
      {props.drinks.map( (drink, i) => {
        return (
          <Drink drink={drink} i={i} submitToCart={submitToCart}/>
        )
      })}
    </div>
  )
}

export default AlcoholList;
