import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import AuthContext from "./context/auth";
import Routes from "./routes";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<App />, document.getElementById("root"));

// removed <React.StrictMode> around <App/ >

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
