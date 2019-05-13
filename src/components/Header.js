import React from "react";

function Header() {
  return (
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <div className="uk-position-relative">
        <div className="uk-position-top">
          <nav
            className="uk-navbar-container uk-navbar-transparent"
            uk-navbar="true"
          >
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav ">
                <li>
                  <a href="/">Projects</a>
                </li>
                <li>
                  <a href="/">Beyond Screen</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export { Header as default };
