import "../global.scss";
import "./main.scss";
import { Component } from "react";
import Header from "../header/Header";
import Home from "../home/Home";
import Footer from "../footer/Footer";

// const defaultChar = `5cd99d4bde30eff6ebccfe9e`;
// const API_QUOTES_ID = (id) =>
//   ` https://the-one-api.dev/v2/character/${id}/quote`;
// const API_CHAR

export default class Main extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
