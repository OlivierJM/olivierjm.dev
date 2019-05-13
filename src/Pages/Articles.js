import React from "react";
import * as data from "../blogs.json";

function Articles() {
  const blogs = data.default;
  return (
    <div>
      {/* <h4 className="uk-heading-medium" /> */}
      <h1 class="uk-heading-line uk-text-center">
        <span>Here are different blogs I have written in recent years</span>
      </h1>
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
