import "../AlcoholList.css";
import Drink from './Drink.jsx'
import React, {useState} from 'react';


function AlcoholList (props) {

  // const [name, ] = useState();
  // const [price, ] = useState();
  // const [description, ] = useState();
  // const [images, ] = useState();
  const [cart, addToCart] = useState([]);

  function submitToCart(drinkName, drinkPrice, drinkAmt){
    // let drinkAmount = document.getElementById('addCartAmt').value
    let price= parseFloat(drinkPrice.toFixed(2)).toFixed(2);
    let totalCost= (price * drinkAmt).toFixed(2)
    cart.push([drinkName, drinkAmt, totalCost]);
    console.log(1,cart);
    addToCart(cart);
    console.log(2,cart);
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