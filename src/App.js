import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/layouts/Navbar";
import NotFound from "./components/layouts/NotFound";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
// import Footer from "./components/layouts/Footer";

class App extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          <div className="container" style={{marginTop: "57px"}}>
            <Switch>
              <Route exact path={["/"]} component={Home}/>
              <Route exact path={["/privacy"]} component={Privacy}/>
              <Route exact path={["/terms"]} component={Terms}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
    );
  }
}

export default App;
