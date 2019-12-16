import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={<h4>Hello I am the home page guy</h4>}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
