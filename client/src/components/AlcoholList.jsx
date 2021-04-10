import "../AlcoholList.css";
import React, {useState} from 'react';
import Rodal from 'rodal';

function AlcoholList (props) {

  // const [name, ] = useState();
  // const [price, ] = useState();
  // const [description, ] = useState();
  // const [images, ] = useState();
  const [visibleRodal, toggleRodal] = useState(false);

  function showRodal(){
    toggleRodal(true);
  }

  function closeRodal(){
    toggleRodal(false);
  }

  return (
    <div>
      {console.log(visibleRodal)}
      {props.drinks.map( (drink, i) => {
        return (
          <div key ={i}>
            <h3 className='drinkName' onClick={showRodal}>{(drink.name[0]).toUpperCase() + (drink.name).substring(1,drink.name.length)}</h3>
            <div className='drinkPrice'>${drink.price.toFixed(2)}</div>
            <div className='drinkDesc'>"{drink.description}"</div>
            <img className='drinkImg' src={drink.images} alt='hi'></img>
            <Rodal visible={visibleRodal} onClose={closeRodal}>
              <h2 className='rodalName'>{drink.name.toUpperCase()}</h2>
              <img className='rodalImg' src={drink.images} alt=''></img>
              <div className='rodalPrice'>${drink.price.toFixed(2)}</div>
            </Rodal>
          </div>
        )
      })}
    </div>
  )
}

export default AlcoholList;