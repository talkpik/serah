import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";
import "./notifications.css";
import Maps from "./components/Maps";
import Carousel from "./components/Carousel.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

import {StaticKitProvider} from "@statickit/react";
// import axios from "axios";

// Main Components
import AboutUs from "./components/AboutUs";
import Home from "./components/Home.jsx";
import LiveEvent from "./components/LiveEvent.jsx";
import Nav from "./components/Nav.jsx";

export default function App() {
  console.log("This is loading?");
  return (
    <Router>
      <Nav />
      <ScrollToTop />
      <ScrollToTopButton />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* below is passing props as a child - the old way of pasing props*/}
        {/* Route component={LiveEvent} path="/liveevent" */}
        <Route path="/liveevent">
          <LiveEvent />
        </Route>
        {/* below included */}
        <Route path="/aboutus" component={AboutUs}>
          
        </Route>
        <Route path="/maps">
          <Maps />
        </Route>
        <Route path="/carousel">
          <Carousel />
        </Route>
      </Switch>
    </Router>
  );
}
