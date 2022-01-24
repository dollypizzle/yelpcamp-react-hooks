import React, { useState } from "react";

import { Link, withRouter } from "react-router-dom";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const NavigationItems = (props) => {
  

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen( !isOpen );
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    props.history.push("/campgrounds");
  }

  
    const token = localStorage.getItem("token");

    return (
      <MDBNavbar
        dark
        expand="md"
        style={{ marginBottom: "20px", backgroundColor: "purple" }}
      >
        <MDBNavbarBrand>
          <MDBNavLink to="/">
            <strong className="white-text">Yelpcamp</strong>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav right>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/campgrounds">
                  Campgrounds
                </Link>
              </li>

              {token !== null ? (
                <li className="nav-item" onClick={logout}>
                  <a href="logout" className="nav-link">Logout</a>
                </li>
              ) : (
                <React.Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Sign In
                    </Link>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  
}

export default withRouter(NavigationItems);
