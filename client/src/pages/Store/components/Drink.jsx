import '../styles/Drink.css';
import { useState } from 'react';
import Rodal from 'rodal';

function Drink({ drink, addToBag }) {
  const [drinkAmt, changeAmt] = useState(1);
  const [visibleRodal, toggleRodal] = useState(false);

  return (
    <div>
      <h3 className="drinkName" onClick={(e) => toggleRodal(true)}>
        {drink.name[0].toUpperCase() +
          drink.name.substring(1, drink.name.length)}
      </h3>
      <div className="drinkPrice">${drink.price.toFixed(2)}</div>
      <div className="drinkDesc">"{drink.description}"</div>
      <img className="drinkImg" src={drink.images} alt="hi"></img>
      <Rodal visible={visibleRodal} onClose={(e) => toggleRodal(false)}>
        <h2 className="rodalName">{drink.name.toUpperCase()}</h2>
        <img className="rodalImg" src={drink.images} alt=""></img>
        <div className="rodalPrice">${drink.price.toFixed(2)}</div>
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
          // onClick={
          //   useSubmitToCart(drink.name, drink.price, drinkAmt)
          // }
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