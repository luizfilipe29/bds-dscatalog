import Home from "pages/Home";
import Navbar from "components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Catalog from "pages/Catalog";
import Admin from "pages/Admin";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
    <Route path="/products">
      <Catalog />
    </Route>
    <Route path="/admin">
      <Admin />
    </Route>
  </BrowserRouter>
);

export default Routes;
