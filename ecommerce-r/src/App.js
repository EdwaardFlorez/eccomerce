import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
