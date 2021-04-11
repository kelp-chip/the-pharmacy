import "../styles/Drink.css";
import { useState } from "react";
import Rodal from "rodal";

function Drink(props) {
  const [drinkAmt, changeAmt] = useState(1);
  const [visibleRodal, toggleRodal] = useState(false);
  // let cartAmt = document.getElementById('addCartAmt').value;

  function changeDrinkAmt(e) {
    // let amount = document.getElementById('addCartAmt').value;
    let amount = e.target.value;
    changeAmt(amount);
  }

  function showRodal() {
    toggleRodal(true);
  }

  function closeRodal() {
    toggleRodal(false);
  }

  return (
    <div key={props.i} onClick={showRodal}>
      <img className="drinkImg" src={props.drink.images} alt="hi"></img>
      <Rodal visible={visibleRodal} onClose={closeRodal} className="popupStyle">
        <div>
          <h2 className="rodalName">{props.drink.name.toUpperCase()}</h2>
          <div className="rodalPrice">${props.drink.price.toFixed(2)}</div>
        </div>
        <div className="drinkDesc">"{props.drink.description}"</div>
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
          onClick={() => {
            props.submitToCart(props.drink.name, props.drink.price, drinkAmt);
          }}
          type="submit"
        >
          Add To Cart
        </button>
      </Rodal>
    </div>
  );
}

export default Drink;
