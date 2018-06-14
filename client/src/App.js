import * as React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from "react-hot-loader";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import "./styles/theme.scss"

class App extends React.Component {

  render() {
    return (
      <Router>

        <div>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
          <Footer />
        </div>

      </Router>

    )

  }
}

export default hot(module)(App)
