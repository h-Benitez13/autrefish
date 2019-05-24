import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";
import pro1 from "./pages/Work/pro1";
import pro2 from "./pages/Work/pro2";
import pro3 from "./pages/Work/pro3";
import pro4 from "./pages/Work/pro4";
import pro5 from "./pages/Work/pro5";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router basename="/">
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Home" component={Landing} />
          <Route exact path="/home" component={Landing} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          {/* <Route exact path="/Portfolio" component={Portfolio} /> */}
          <Route exact path="/Work/pro1" component={pro1} />
          <Route exact path="/Work/pro2" component={pro2} />
          <Route exact path="/Work/pro3" component={pro3} />
          <Route exact path="/Work/pro4" component={pro4} />
          <Route exact path="/Work/pro5" component={pro5} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
