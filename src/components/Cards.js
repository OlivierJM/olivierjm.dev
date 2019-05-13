// This will be an example of an article
import React from "react";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <>
      <br />
      <div className="uk-flex uk-flex-center">
        <div className="uk-child-width-1-2@s uk-grid-match" uk-grid="true">
          <div>
            <div className="uk-card uk-card-hover uk-card-body">
              <h3 className="uk-card-title">Articles</h3>
              <p>
                I enjoy writing and sharing what I do with others, read some of
                the articles I have written
              </p>

              <Link to="/articles">
                <button className="uk-button uk-button-default">
                  Check them out
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-hover uk-card-body">
              <h3 className="uk-card-title">Projects</h3>
              <p>Check out some of the projects I have worked on</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
