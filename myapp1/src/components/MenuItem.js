import React, { Component } from "react";

export default class MenuItem extends Component {
  render() {
    return (
      <div className="menuItem">
        <div style={{ backgroundImage: `url(${this.props.image})` }}></div>
        <h1>{this.props.name}</h1>
        <p>{this.props.info}</p>
      </div>
    );
  }
}
