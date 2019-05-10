import React from "react";

function Parallax() {
  const image = "https://images.unsplash.com/photo-1444464666168-49d633b86797";

  return (
    <div
      className="uk-height-large uk-background-cover uk-light uk-flex"
      uk-parallax={"bgy: -200"}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        Headline
      </h1>
    </div>
  );
}

export { Parallax as default };
