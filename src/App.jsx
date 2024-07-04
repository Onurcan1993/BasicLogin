import { Route } from "react-router-dom";

import Login from "./components/Login";
import Success from "./components/Success";

import "bootstrap/dist/css/bootstrap.min.css";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Login></Login>
      </Route>
      <Route path="/success">
        <Success></Success>
      </Route>
    </Switch>
  );
}

export default App;
