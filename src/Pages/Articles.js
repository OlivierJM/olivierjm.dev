import React from "react";

function Articles() {
  return (
    <div
      className="uk-child-width-1-2@s uk-child-width-1-3@m"
      uk-grid="masonry: true"
    >
      <div>
        <div
          className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
          style={{ height: 100 }}
        >
          Item
        </div>
      </div>
    </div>
  );
}

export default Articles;
