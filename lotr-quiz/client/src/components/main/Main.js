/** @format */

import "../global.scss";
import "./main.scss";
import React, { Component } from "react";
import axios from "axios";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Home from "../home/Home";
import Quote from "../home/Home";
// const fs = require("fs");

const defaultChar = `5cd99d4bde30eff6ebccfe9e`;
const API_QUOTES = `https://the-one-api.dev/v2/quote`;
const API_CHAR = (id) => `https://the-one-api.dev/v2/character/${id}`;
const access_token = `c9gab_ZDcePLbL6v49Vn`;

export default class Main extends Component {
  state = {
    quote: [],
    characterId: "",
  };

  componentDidMount() {
    this.getQuote();
  }

  getQuote = async () => {
    const quote = await axios.get(API_QUOTES, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    this.setState({
      quote: quote.data.docs,
    });
  };

  getChar = async () => {
    const character = await axios.get(API_CHAR(defaultChar), {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    this.setState({
      character: character.data,
    });
  };

  render() {
    console.log(this.state.quote);
    const { quote } = this.state;
    // console.log(this.state.character);
    return (
      <div>
        <Header />
        <Home quotes={quote} />
        <Footer />
      </div>
    );
  }
}
