import '../styles/Drink.css';
import React, {useState} from 'react';
import Rodal from 'rodal';


function Drink(props){

  const [drinkAmt, changeAmt] = useState(0);
  const [visibleRodal, toggleRodal] = useState(false);
  // let cartAmt = document.getElementById('addCartAmt').value;

  function changeDrinkAmt(){
    let amount = document.getElementById('addCartAmt').value;
    changeAmt(amount);
  }

  function showRodal(){
    toggleRodal(true);
  }

  function closeRodal(){
    toggleRodal(false);
  }

  return(
    <div key ={props.i}>
      <h3 className='drinkName' onClick={showRodal}>{(props.drink.name[0]).toUpperCase() + (props.drink.name).substring(1,props.drink.name.length)}</h3>
      <div className='drinkPrice'>${props.drink.price.toFixed(2)}</div>
      <div className='drinkDesc'>"{props.drink.description}"</div>
      <img className='drinkImg' src={props.drink.images} alt='hi'></img>
      <Rodal visible={visibleRodal} onClose={closeRodal}>
        <h2 className='rodalName'>{props.drink.name.toUpperCase()}</h2>
        <img className='rodalImg' src={props.drink.images} alt=''></img>
        <div className='rodalPrice'>${props.drink.price.toFixed(2)}</div>
        <input id='addCartAmt' className='addCartAmt' type='number' min='0' onChange={changeDrinkAmt} ></input>
        <button className='addToCart' onClick={()=>{props.submitToCart(props.drink.name, props.drink.price, drinkAmt)}} type='submit'>Add To Cart</button>
      </Rodal>
    </div>
  )
}

export default Drink;