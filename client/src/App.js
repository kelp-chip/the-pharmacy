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

let fakeProducts = [
  {
    name: 'Snake Oil',
    price: 1.99,
    description: 'cures everything from boredom to Flippy Foot',
    images: 'https://i.etsystatic.com/5153295/r/il/55039e/1134500552/il_794xN.1134500552_ajkf.jpg'
  },
  {
    name: 'Cocaine-a-Cola',
    price: 192.99,
    description: 'smells great',
    images: 'https://www.emra.org/contentassets/b1dc416e71b74516a086213e8ca066de/coffee2-600x336.jpg?w=600'
  },
  {
    name: 'The Left Eyeball of a Dytraxian Salamander',
    price: 24.55,
    description: 'recover additional MP when made into an elixir',
    images: 'https://i.redd.it/c30szsrjd4l21.jpg'
  },
  {
    name: '100 mL of Toothpaste',
    price: 2.99,
    description: 'lol it\'s actually 101 mL but the TSA don\'t know that',
    images: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F31AY%252BGLoyKL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FCrest-Travel-Size-Regular-Toothpaste%2Fdp%2FB004MTC8UA&tbnid=oMN_2HHQOYSWTM&vet=12ahUKEwjWyJiL0_TvAhXsAzQIHWq3DFsQMygBegUIARDZAg..i&docid=AbX1dJYVjmbtsM&w=500&h=500&q=travel%20toothpaste&ved=2ahUKEwjWyJiL0_TvAhXsAzQIHWq3DFsQMygBegUIARDZAg'
  }

]

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

          <FauxLanding path="/home" fakeProducts={fakeProducts}/>
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
