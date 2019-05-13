import React from "react";
import * as data from "../blogs.json";
import Header from "../components/Header";

function Articles() {
  const blogs = data.default;
  return (
    <div>
      {/* <div>
      </div> */}

      <Header />
      <div className="uk-container">
        <div>
          <h1 className="uk-heading-line uk-text-center">
            <span style={{ marginTop: "12%" }}>Here are different blogs </span>
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
    </div>
  );
}

export default Articles;
