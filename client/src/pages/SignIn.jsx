import { useState } from "react";
import axios from "axios";

function SignIn({ pseudonym, setPseudonym, setCurrentPage }) {
  const [warning, setWarning] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/customer",
        { pseudonym: pseudonym },
        { withCredentials: true }
      )
      .then(async ({ data }) => {
        if (data.auth) {
          await setCurrentPage("AlcoholList");
          await setWarning("");
        } else {
          setWarning(data.message);
        }
      });
  };

  //   const handleRegistration = (e) => {
  //     e.preventDefault();
  //     axios
  //       .post("http://localhost:8000/newCustomer", { pseudonym: pseudonym })
  //       .then(async ({ data }) => {
  //         if (data.auth) {
  //           await setCurrentPage("AlcoholList");
  //           await setWarning("");
  //         } else {
  //           setWarning(data.message);
  //         }
  //       });
  //   };

  return (
    <div>
      <h1>Sign In</h1>
      {warning && <h2>{warning}</h2>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pseudonym}
          onChange={(e) => setPseudonym(e.target.value)}
        ></input>
        <input type="submit" value={!warning ? "submit" : "register"}></input>
      </form>
    </div>
  );
}

export default SignIn;
