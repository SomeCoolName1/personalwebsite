import React, { Component } from "react";
import DigitalBot from "./components/digitalBot";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import ParticlesBackground from "./components/displays/particles";
class App extends Component {
  render() {
    return (
      <div id="App">
        <ParticlesBackground />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/digitalbot" element={<DigitalBot />} />
        </Routes>
      </div>
    );
  }
}

export default App;
