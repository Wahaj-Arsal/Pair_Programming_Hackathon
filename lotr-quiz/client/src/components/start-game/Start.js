import React, { Component } from "react";
import "./start.scss";
import React, { useState } from "react";
import fellowship from "../../assets/fellowship.png";

export default class Start extends Component {
  // const [revealed, setReveal] = useState(false);

  render() {
    return (
      <div>
        <h1>Lord of the Quotes</h1>
        <div className="start-box">
          <div className="container">
            <div className="text">Loading...</div>
            <div className="loading">
              <div className="line-box">
                <div className="line"></div>
              </div>
            </div>
            <button
              className="next-button"
              // {revealed ? "showbutton" : "hidden-button"}
            >
              Begin Your Quote Quest
            </button>
          </div>
        </div>
      </div>
    );
  }
}
