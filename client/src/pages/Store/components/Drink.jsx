import "../styles/Drink.css";
import { useState } from "react";
import Rodal from "rodal";

function Drink({ drink, addToBag }) {
  const [drinkAmt, changeAmt] = useState(1);
  const [visibleRodal, toggleRodal] = useState(false);
<<<<<<< HEAD
  // let cartAmt = document.getElementById('addCartAmt').value;

  function changeDrinkAmt(e) {
    // let amount = document.getElementById('addCartAmt').value;
    let amount = e.target.value;
    changeAmt(amount);
  }

  return (
    <div key={props.i} onClick={() => toggleRodal(true)} className="drink">
      <img className="drinkImg" src={props.drink.images} alt="hi"></img>
      <Rodal
        visible={visibleRodal}
        onClose={() => toggleRodal(false)}
        className="popupStyle"
      >
=======

  return (
    <div onClick={() => {toggleRodal(true)}}>
      <img className="drinkImg" src={drink.images} alt="hi"></img>
      <Rodal visible={visibleRodal} onClose={() => {toggleRodal(false)}} className="popupStyle">
>>>>>>> 558e6ad09543d3282f64067bb5cc33310006d3df
        <div>
          <h2 className="rodalName">{drink.name.toUpperCase()}</h2>
          <div className="rodalPrice">${drink.price.toFixed(2)}</div>
        </div>
        <div className="drinkDesc">"{drink.description}"</div>
        <input
          id="addCartAmt"
          className="addCartAmt"
          value={drinkAmt}
          type="number"
          min="1"
          onChange={(e) => changeAmt(e.target.value)}
        ></input>
        <button
          className="addToCart"
          onClick={(e) =>
            addToBag({ name: drink.name, price: drink.price, amount: drinkAmt })
          }
          type="submit"
        >
          Add to Bag
        </button>
      </Rodal>
    </div>
  );
}

export default Drink;
