import { useState } from "react";
import "./styles/App.css";
import FauxLanding from "./pages/FauxLanding.jsx";
// import SignIn from "./pages/SignIn.jsx";
import axios from "axios";
import AlcoholList from "./pages/AlcoholList";
// import QuestionSubmitted from "./pages/QuestionSubmitted";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedExample from "./pages/ProtectedExample";
import { AuthContext, setAuthTokens } from "./context/auth";

let mockData = [
  {
    id: 1,
    name: "gin",
    price: 1.5,
    description: "really great stuff my brother Al makes. Super strong too.",
    images:
      "https://dydza6t6xitx6.cloudfront.net/ci-hendricks-gin-7270fa521eb29536.jpeg,",
  },
  {
    id: 2,
    name: "beer",
    price: 2.0,
    description: "tastes good",
    images:
      "https://dydza6t6xitx6.cloudfront.net/ci-hendricks-gin-7270fa521eb29536.jpeg,",
  },
];

function App() {
  const [authTokens, setAuthTokens] = useState(false);
  // const { setAuthTokens } = useAuth();

  const setTokens = async (data) => {
    await axios
      .get("http://localhost:8000/isAuth", { withCredentials: true })
      .then(async (result) => {
        if (result.data.auth) {
          setAuthTokens(result.data);
          // return true;
        } else {
          setAuthTokens(false);
          console.log("has not been set: false");
          // return false;
        }
      });
  };
  // const checkAuth = async () => {
  //   await axios
  //     .get("http://localhost:8000/isAuth", { withCredentials: true })
  //     .then(async (result) => {
  //       // console.log(result);
  //       if (result.data.auth) {
  //         setAuthTokens(result.data);
  //         console.log("has been set: true");
  //         // return true;
  //       } else {
  //         console.log("has not been set: false");
  //         // return false;
  //       }
  //     });
  // };

  const login = async () => {
    await axios.post(
      "http://localhost:8000/passcode",
      { passcode: "Jerry sent me" },
      { withCredentials: true }
    );
    await axios.post(
      "http://localhost:8000/customer",
      { pseudonym: "Pug" },
      { withCredentials: true }
    );
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>home</h1>
          </Route>

          <FauxLanding path="/home" />
          <AlcoholList path="/store" drinks={mockData} />

          <ProtectedRoute path="/protected" component={ProtectedExample} />
        </Switch>
        <button onClick={login}>login</button>
        <button>logout</button>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

// const pages = {
//   FauxLanding: <FauxLanding setCurrentPage={setCurrentPage} />,
//   AlcoholList: (
//     <ProtectedRoute
//       drinks={mockData}
//       path="/store"
//       component={AlcoholList}
//       isAuth={isAuth}
//     />
//   ),
//   SignIn: (
//     <SignIn
//       path="/signin"
//       pseudonym={pseudonym}
//       setPseudonym={setPseudonym}
//       setCurrentPage={setCurrentPage}
//     />
//   ),
//   QuestionSubmitted: (
//     <QuestionSubmitted
//       path="/question"
//       component={QuestionSubmitted}
//       isAuth={true}
//     />
//   ),
// };
