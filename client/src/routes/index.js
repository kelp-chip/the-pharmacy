import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AlcoholList from "../pages/AlcoholList";
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
        <Route path="/store" component={AlcoholList} />
        <Route path="/example" component={ProtectedExample} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
