import React, { Component } from "react";

//import SearchBar.css
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return  (
      <div className="SearchBar">
          <input placeholder="Artists, Songs, Lyrics, Album 🎤"/>
          <button className="SearchButton">SEARCH</button>
      </div>
      )
  }
}

export default SearchBar;
