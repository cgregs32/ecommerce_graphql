import React, { Component } from "react";
import PropTypes from "prop-types";
import Title from "./styles/Title";
import ItemStyle from "./styles/ItemStyle";
import PriceTag from "./styles/PriceTag";

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    return <div />;
  }
}
