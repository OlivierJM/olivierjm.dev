import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components
import Parallax from "./components/Parralax";
import Cards from "./components/Cards";
import Header from "./components/Header";

// pages
import Articles from "./Pages/Articles";
// import Head

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/articles" component={Articles} />
      </Switch>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <Header />
      <Parallax />
      <Cards />
    </>
  );
}

export default App;
