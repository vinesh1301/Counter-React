/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light ">
        <a className="navbar-brand" href="#">
          Counter{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounter}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
