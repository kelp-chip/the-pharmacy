import "../AlcoholList.css";
import Drink from './Drink.jsx'

function AlcoholList (props) {

  // const [name, ] = useState();
  // const [price, ] = useState();
  // const [description, ] = useState();
  // const [images, ] = useState();


  return (
    <div>
      <h1>Welcome to the Pharmacy</h1>
      {props.drinks.map( (drink, i) => {
        return (
          <Drink drink={drink} i={i}/>
        )
      })}
    </div>
  )
}

export default AlcoholList;