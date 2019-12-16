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
            <h4
              className="text-center"
              style={{
                marginTop: 20,
                marginBottom: 20
              }}
            >
              Projects I have worked on
            </h4>
            <div class="grid-container">
              <div class="grid-x grid-margin-x small-up-2 medium-up-3">
                <div className="cell">
                  <div className="card">
                    <div className="card-section">
                      <h4>SparkEd</h4>
                      <p>Education platform</p>
                    </div>
                  </div>
                </div>
                <div className="cell">
                  <div className="card">
                    <div className="card-section">
                      <h4>Sparked v3</h4>
                      <p>an enhanced version of Sparked V2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
