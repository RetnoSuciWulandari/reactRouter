import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from "./Home";
import History from "./History";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="none">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/our-history" activeClassName="active">
                History
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/our-history" component={History}>
            <History />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
