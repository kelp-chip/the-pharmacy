import "./App.css";
import "./components/FauxLanding.jsx";
import "./components/AlcoholList.jsx";
import AlcoholList from "./components/AlcoholList";
import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedExample from "./pages/ProtectedExample";

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
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Route path="/">
        <button>protected place</button>
      </Route>
      <ProtectedRoute
        path="/example"
        component={ProtectedExample}
        isAuth={isAuth}
      />
      <AlcoholList drinks={mockData} />
    </Router>
  );
}

export default App;
