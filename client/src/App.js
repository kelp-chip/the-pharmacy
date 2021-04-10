import "./styles/App.css";
import { AuthContext } from "./context/auth";
import Routes from "./routes";

function App() {
  return (
    <AuthContext.Provider value={true}>
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;
