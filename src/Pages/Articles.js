import React from "react";

function Articles() {
  return (
    <div
      class="uk-child-width-1-2@s uk-child-width-1-3@m"
      uk-grid="masonry: true"
    >
      <div>
        <div
          class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
          style="height: 100px"
        >
          Item
        </div>
      </div>
    </div>
  );
}

export default Articles;
