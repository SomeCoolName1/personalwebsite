import React, { Component } from "react";
import DigitalBot from "./components/digitalBot";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/digitalbot" element={<DigitalBot />} />
        </Routes>
      </div>
    );
  }
}

export default App;
