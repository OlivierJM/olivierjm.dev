import React from "react"
import headerStyles from "../styles/components/header.module.scss"

export default function Header(props) {
  return (
    <header
      className={`${headerStyles.header} ${props.page === "info" &&
        headerStyles.info_page}`}
    >
      <div className="grid-y medium-grid-frame">
        <div className="cell medium-auto medium-cell-block-container">
          <div className="grid-x grid-padding-x">
            <div className="cell medium-9 medium-cell-block-y">
              <img
                src="https://avatars3.githubusercontent.com/u/11255454?s=400&u=5a87d7f4eb60bb8b7c0a5d5c19fe16981e103f1d&v=4"
                alt="Olivier's github profile pic"
                style={{
                  borderRadius: "50%",
                  width: "72%",
                  margin: "12%",
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
                Github:
                <a href="https://github.com/olivierjm" className="text-center">
                  @olivierjm
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <h1>{props.title}</h1>
        </Link>
        <div>
          <h1>
            <Link
              to={
                props.page === 'info'
                  ? "/"
                  : "/info"
              }
              activeClassName={headerStyles.navItemActive}
            >
              {props.page === 'info'
                ? "close"
                : "info"}
            </Link>
          </h1>
        </div>
      </nav> */}
    </header>
  )
}
