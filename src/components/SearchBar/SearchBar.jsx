import React, { Component } from "react";

//import SearchBar.css
import "./SearchBar.css";

class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      term: ''
    }

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  render() {
    return  (
      <div className="SearchBar">
          <input onChange={this.handleTermChange} placeholder="Songs, Artists, albums 🎤"/>
          <button onClick={this.search} className="SearchButton">SEARCH</button>
      </div>
      );
  }
}

export default SearchBar;
