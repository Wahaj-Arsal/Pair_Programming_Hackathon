import React, { Component } from "react";
import "./start.scss";
import fellowship from "../../assets/fellowship.png";

export default class Start extends Component {
  render() {
    return (
      <div>
        <h1>Lord of the Quotes</h1>
        <button className="start-button">Begin Your Quest</button>
      </div>
    );
  }
}
