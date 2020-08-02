import React, { Component } from "react";
import styled from "styled-components";

const ImageBox = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 80%;
  margin: 0 10% 0 10%;
`;
export default class Image extends Component {
  render() {
    return <ImageBox src={this.props.source} alt={this.props.text} />;
  }
}
