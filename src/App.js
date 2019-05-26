import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import pro1 from "./pages/Projects/commercials";
import pro2 from "./pages/Projects/musicVideos";
import pro3 from "./pages/Projects/tvSeries";
import pro4 from "./pages/Projects/films";

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
          <Route exact path="/Projects/commercials" component={pro1} />
          <Route exact path="/Projects/musicVideos" component={pro2} />
          <Route exact path="/Projects/tvSeries" component={pro3} />
          <Route exact path="/Projects/films" component={pro4} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
