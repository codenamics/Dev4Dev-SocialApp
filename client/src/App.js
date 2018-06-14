import { hot } from "react-hot-loader";
import * as React from "react";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

import "./styles/theme.scss"

class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <Landing />
        <Footer />
      </div>

    )

  }
}

export default hot(module)(App)
