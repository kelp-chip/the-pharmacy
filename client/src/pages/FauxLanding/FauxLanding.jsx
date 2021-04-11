import { Redirect } from "react-router-dom";
import "./FauxLanding.css";
const { useState } = require("react");
const axios = require("axios");
const { useAuth } = require("../../context/auth");
const { fakeProducts, dumbAnswers } = require("../../components/fakeData");

function FauxLanding() {
  const [passcode, setPasscode] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  // const { setAuthTokens } = useAuth();
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/passcode",
        { passcode: passcode },
        { withCredentials: true }
      )
      .then(async (result) => {
        if (result.data) {
          // setAuthTokens(result.data);
          setIsConfirmed(true);
        } else {
          let answer = dumbAnswers[count];
          setMessage(answer);
          setCount(count + 1);
          if (count === dumbAnswers.length - 1) {
            setCount(0);
          }
        }
      });
  };

  if (isConfirmed) {
    return <Redirect to="/store" />;
  }

  return (
    <div>
      <marquee scrollDelay="0.1s">
        <span>NO BOOZE SOLD HERE!</span>&emsp;&emsp;&emsp;
        <span>BOOZE HOUNDS PLEASE STAY OUT!!!!</span>
      </marquee>
      <img
        className="logo"
        src="https://res.cloudinary.com/dli6sknqy/image/upload/v1618138539/logo_wfjptk.svg"
      ></img>
      <div>
        <div className="container">
          <div>
            <h3>Come by and pick up any of these amazing products:</h3>
            {fakeProducts.map((fakeProduct, i) => {
              return (
                <div key={i}>
                  <strong className="fakeProductName">
                    {fakeProduct.name}
                  </strong>{" "}
                  -
                  <span className="fakeProductPrice">{fakeProduct.price}¢</span>
                  <div className="fakeProductDesc">
                    {fakeProduct.description}
                  </div>
                  <img
                    className="fakeProductImg"
                    src={fakeProduct.image}
                    alt=""
                  ></img>
                </div>
              );
            })}
            <div>
              <h1>The Docter is in!</h1>
              <h3>Ask me anything</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                ></input>
                <br></br>
                <input className="submit" type="submit"></input>
              </form>
              <h4>{message}</h4>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dli6sknqy/image/upload/v1618137743/Screen_Shot_2021-04-11_at_6.41.42_AM_shbx8c.png"
            width="300px;"
          ></img>
        </div>
      </div>
      <div className="sign"></div>
    </div>
  );
}

export default FauxLanding;
