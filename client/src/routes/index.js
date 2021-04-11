import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Confirm from "../pages/Confirm";
import Order from "../pages/Order";
import Store from "../pages/Store";
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
        <Route path="/order" component={Order} />
        <Route path="/confirm" component={Confirm} />
        <Route path="/example" component={ProtectedExample} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
