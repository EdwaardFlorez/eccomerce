import "./Header.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Home from "../home/Home";
import Products from "../products/products";
import Product from "../product/Product";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Angular
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" className="btn btn-dark">
                  <a class="nav-link">Home</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Products" className="btn btn-dark">
                  <a class="nav-link">Products</a>
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container">
        <Switch>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Header;
