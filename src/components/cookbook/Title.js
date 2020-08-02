import React, { Component } from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
  background-color: rgb(83, 153, 114);
  color: rgb(229, 221, 203);
  padding: 0.2em;
  position: relative;
 
`;

export default class Title extends Component {
  render() {
    return <StyledH2>{this.props.title}</StyledH2>;
  }
}
