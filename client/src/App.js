import "./App.css";
import "./components/FauxLanding.jsx";
// import FauxLanding from "./components/FauxLanding";
import "./components/AlcoholList.jsx";
import AlcoholList from "./components/AlcoholList";

let mockData = [
    {
      id: 1,
      name: "gin",
      price: 1.50,
      description: "really great stuff my brother Al makes. Super strong too.",
      images: "https://dydza6t6xitx6.cloudfront.net/ci-hendricks-gin-7270fa521eb29536.jpeg,"
    },
    {
      id: 2,
      name: "beer",
      price: 2.00,
      description: "tastes good",
      images: "https://dydza6t6xitx6.cloudfront.net/ci-hendricks-gin-7270fa521eb29536.jpeg,"
    },
]

function App() {
  return (
    <div>
      <AlcoholList drinks={mockData}/>
    </div>
  );
}

export default App;
