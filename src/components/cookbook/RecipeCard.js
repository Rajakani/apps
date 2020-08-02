import React, { Component } from "react";
import Title from "./Title";
import Image from "./Image";
import styled from "styled-components";

const Card = styled.div`
  width: 15em;
  height: 20em;
  box-sizing: border-box;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 2.5px; /* 5px rounded corners */
  border-bottom: 1px solid rgb(204, 204, 204);
  margin-top: 5px;
  background-color: rgb(229, 221, 203);
  &:hover {
    background-color: rgb(210, 210, 200);    
  }
`;
const Description = styled.p`
  color: rgb(70, 67, 58);
  padding-top: 10px;
  text-align: center;
`;
export default class RecipeCards extends Component {
  render() {
    var imagePath =
    window.location.origin + "/apps/assets/images/" + this.props.recipe.image;
    return (
      <Card>
        {},
        <Title title={this.props.recipe.recipeName} />
        <Image source={imagePath} text={this.props.recipe.recipeName} />
        <Description>{this.props.recipe.description}</Description>
      </Card>
    );
  }
}
