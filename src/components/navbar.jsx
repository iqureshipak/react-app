import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Always expand
        </a>
        <button
          class="navbar-toggler"
          aria-expanded="false"
          aria-controls="navbarsExample02"
          aria-label="Toggle navigation"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample02"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample02">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <span className="badge badge-pill badge-secondary">
                {this.props.totalCounters}
              </span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
