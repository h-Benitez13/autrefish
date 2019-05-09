import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";
// import Work from "./pages/Work";
// import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Home" component={Landing}/>
          <Route exact path="/home" component={Landing}/>
           <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          {/*<Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Work" component={Work} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
