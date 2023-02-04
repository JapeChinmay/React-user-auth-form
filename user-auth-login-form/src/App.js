import React, { Fragment } from "react";

import Login from "./Pages/Login";

import Register from "./Pages/Register";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Register />

      <br />
      <Login />

      <br />
    </Fragment>
  );
}

export default App;
