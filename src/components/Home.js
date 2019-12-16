import React from "react";

export default function Home() {
  return (
    <div className="grid-y medium-grid-frame">
      <div className="cell medium-auto medium-cell-block-container">
        <div className="grid-x grid-padding-x">
          <div className="cell medium-3 medium-cell-block-y">
            <img
              src="https://avatars3.githubusercontent.com/u/11255454?s=400&u=5a87d7f4eb60bb8b7c0a5d5c19fe16981e103f1d&v=4"
              alt="Olivier's github profile picture"
              style={{
                borderRadius: "50%",
                width: "72%",
                margin: "12%"
              }}
            />
            <h3 className="text-center">
              <strong>Olivier JM Maniraho</strong>
            </h3>
            <p className="text-center subheader">
              Senior Software Engineer at The ZIG by day and Opensource
              contributor by night
            </p>
            <p className="text-center ">
              Github:{" "}
              <a href="https://github.com/olivierjm" className="text-center">
                @olivierjm
              </a>
            </p>
          </div>
          <div className="cell medium-9 medium-cell-block-y">
            <h2>Independent scrolling body</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              lacus odio, accumsan id ullamcorper eget, varius nec erat. Nulla
              facilisi. Donec dui felis, euismod nec finibus vitae, dapibus quis
              arcu. Maecenas tempor et ipsum quis venenatis. Ut posuere sed
              augue sit amet efficitur. Sed imperdiet, justo id tempus rhoncus,
              est est viverra turpis, non vulputate magna lectus et nisl.
              Pellentesque ultrices porttitor vehicula. Ut aliquet efficitur
              ligula, a consectetur felis. Proin tristique ut augue nec luctus.
              Curabitur a sapien pretium, auctor elit a, efficitur erat. Donec
              tincidunt dui vel velit bibendum euismod. Cras vitae nibh dui.
              Aliquam erat volutpat. Etiam sit amet arcu a erat efficitur
              facilisis. Ut viverra dapibus turpis, et ornare justo. Integer in
              dui cursus, dignissim tortor a, hendrerit risus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
