import React, { Component } from "react";

//import Playlist.css
import "./Playlist.css";

class Playlist extends Component {
  render() {
    return (
    <div className="Playlist">
      <input defaultValue={"New Playlist ✨"} />
      {/* <TrackList /> */}
      <button className="Playlist-save">Save to Spontify</button>
      </div>
    )
  }
}

export default Playlist;
