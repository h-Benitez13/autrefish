import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router basename="/">
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Home" component={Landing} />
          <Route exact path="/home" component={Landing} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
