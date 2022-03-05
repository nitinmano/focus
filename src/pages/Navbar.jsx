import React, { Component } from "react";
import "./css/homepage.scss";

class Navbar extends Component {
  state = {};

  navToggle = (_) => {
    const primaryNav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", "true");
      navToggle.setAttribute("aria-expanded", "true");
    } else if (visibility === "true") {
      primaryNav.setAttribute("data-visible", "false");
      navToggle.setAttribute("aria-expanded", "false");
    }
  };

  render() {
    return (
      <div>
        <header className="primary-header flex">
          <div className="logo">
            <h4><a href="/">Focus </a></h4>
          </div>
          <button
            onClick={this.navToggle}
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded="false"
          >
            &#9776;
          </button>
          <nav>
            <ul
              id="primary-navigtion"
              data-visible="false"
              className="primary-navigation flex"
            >
              <li>
                <a href="/dashboard">
                  <span> Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/signin">
                  <span>Login</span>{" "}
                </a>
              </li>
              <li>
                <a href="/register">
                  <span>Signup</span>{" "}
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export { Navbar };
