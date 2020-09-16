import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./components/Home";
import Posts from "./components/Posts";
import Albums from "./components/Albums";

function App() {
  return (
    <Router>
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/posts">
              Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/albums">
              Albums
            </Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/albums" component={Albums} />
      </Switch>
    </Router>
  );
}

export default App;
