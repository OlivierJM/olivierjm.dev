import React from "react";
import * as data from "../blogs.json";
import Header from "../components/Header";

function Articles() {
  const blogs = data.default;
  return (
    <div>
      {/* <div>
        <Header transparent="" />
      </div> */}

      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
        <div className="uk-position-relative">
          <div className="uk-position-top">
            <nav className="uk-navbar-container" uk-navbar="true">
              <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                  <li className="uk-active">
                    <a href="#">Active</a>
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
                        <li>
                          <a href="#">Item</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">Item</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div>
        <h1 className="uk-heading-line uk-text-center">
          <span style={{ marginTop: "10%" }}>Here are different blogs </span>
        </h1>
      </div>
      <div uk-grid="true">
        {blogs.map(blog => (
          <div key={blog.id} className="uk-width-1-1">
            <div className="uk-card uk-card-default uk-card-body">
              <h3 className="uk-card-title">{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
