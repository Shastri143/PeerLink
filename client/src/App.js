import React from "react";
import "./App.css";
import VideoPlayer from "./VideoPlayer";
import Options from "./Options";

function App() {
  return (
    <div className="app">
      <h1>PeerLink</h1>

      <VideoPlayer />

      <Options />
    </div>
  );
}

export default App;
