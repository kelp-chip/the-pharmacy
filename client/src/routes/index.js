import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

<<<<<<< HEAD
=======
import Confirm from "../pages/Confirm";
import Order from "../pages/Order";
>>>>>>> e0e268311534762bfbf23bea4d450418bc1935f9
import Store from "../pages/Store";
import Order from "../pages/Order";
import FauxLanding from "../pages/FauxLanding";
import ProtectedExample from "../pages/ProtectedExample";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact>
        <h1>home</h1>
      </Route>
      <Switch>
        <Route exact path="/" component={FauxLanding} />
        <Route exact path="/order" component={Order} />
        <Route path="/store" component={Store} />
        <Route path="/confirm" component={Confirm} />
        <Route path="/example" component={ProtectedExample} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
