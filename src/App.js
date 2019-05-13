import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Header from "./components/Header";
import Parallax from "./components/Parralax";
import Cards from "./components/Cards";
import Articles from "./Pages/Articles";

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
      <Parallax />
      <Cards />
    </>
  );
}

export default App;
