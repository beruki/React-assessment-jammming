import React, { Component } from "react";

//import Track.css
import "./Track.css";

class Track extends Component {

  renderAction() {
    if(this.props.isRemoval) {
      return <button className="Track-action">-</button>
    } else {
      return <button className="Track-action">+</button>
    }
  }


  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>

          {/* <h3>track title</h3>
          <p>track artist | track name</p> */}

        </div>
        {this.renderAction()}
      </div>
    )
  }
}

export default Track;
