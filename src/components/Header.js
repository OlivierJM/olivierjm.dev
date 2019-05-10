import React from "react";

function Header() {
  const image = "https://images.unsplash.com/photo-1444464666168-49d633b86797";
  return (
    <div className="uk-position-relative">
      <img src={image} alt="" />
      <div className="uk-position-top">
        <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <a href="#">Active</a>
              </li>
              <li>
                <a href="#">Item</a>
              </li>
              <li>
                <a href="#">Parent</a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li className="uk-active">
                      <a href="#">Active</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li className="uk-nav-header">Header</li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li className="uk-nav-divider" />
                    <li>
                      <a href="#">Item</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export { Header as default };
