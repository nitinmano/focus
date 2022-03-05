import React, { Component } from "react";
import "./css/sidenav.scss";
class SideNav extends Component {
  state = {};
  render() {
    const Focus = {
      textAlign: "center",
      fontSize: "1.2rem",
      color: "rgba(160, 180, 200, 0.85)",
    };
    return (
      <div>
        <nav className="nav">
          <ul>
            <h4 style={Focus}>Focus</h4>
            <li>
              <a href="/#"> <i class="fa-solid fa-house"></i> Dashbord</a>
            </li>
            <li>
              <a href="/#">Charts</a>
            </li>
            <li>
              <a href="/#">Calendar</a>
            </li>
            <li>
              <a href="/#">Profile</a>
            </li>
            <li>
              <a href="/#">Invoice</a>
            </li>
            <li>
              <a href="/#">Table</a>
            </li>
            <li>
              <a href="/#">manage</a>
            </li>
            <li>
              <a href="/#">E-mail</a>
            </li>
            <li>
              <a href="/#">Settings</a>
            </li>
            <li>
              <a href="/#">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export { SideNav };
