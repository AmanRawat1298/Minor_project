import React from "react";

export default function Header() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="http://localhost:3000/Retailerpage" className="nav-link">
            Home
          </a>
        </li>
        {/* <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li> */}
        <li className="nav-item d-none d-sm-inline-block">
          <a href="http://localhost:3000/" className="nav-link">
            Logout
          </a>
        </li>
      </ul>
      {/* SEARCH FORM */}
      <form className="form-inline ml-3">
        <div className="input-group input-group-sm">
          <input
            className="form-control form-control-navbar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="input-group-append">
            <button className="btn btn-navbar" type="submit">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </form>
      
    </nav>
  );
}
