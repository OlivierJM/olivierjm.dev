import React from "react";

function Parallax() {
  return (
    <div
      className="uk-height-large uk-background-cover uk-light uk-flex"
      uk-parallax={"bgy: -200"}
      style={{
        backgroundImage: `linear-gradient(to left top, #183932, #1b4740, #1d564e, #1d655e, #1b746f)`
      }}
    >
      <h1 className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        Welcome to OlivierJM
      </h1>
    </div>
  );
}

export { Parallax as default };
