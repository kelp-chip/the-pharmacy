const { useState } = require("react");
const axios = require("axios");

function FauxLanding({ setCurrentPage }) {
  const [passcode, setPasscode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/passcode",
        { passcode: passcode },
        { withCredentials: true }
      )
      .then((result) => {
        if (result.data) {
          setCurrentPage("SignIn");
        } else {
          setCurrentPage("QuestionSubmitted");
        }
      });
  };

  return (
    <div>
      <h1>FauxLanding</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default FauxLanding;
