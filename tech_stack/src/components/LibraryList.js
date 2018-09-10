import React, { Component } from "react";
import { connector } from "react-redux";

class LibraryList extends Component {
  render() {
    return;
  }
}

const mapStateToProps = state => {
  console.log(state);
};

export default connector(mapStateToProps)(LibraryList);
