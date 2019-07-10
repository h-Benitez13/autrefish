import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Autre from "./pages/Autre";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router basename="/">
      <div>
        <Switch>
          <Route exact path="/" component={Autre} />
          <Route exact path="/Home" component={Autre} />
          <Route exact path="/home" component={Autre} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
