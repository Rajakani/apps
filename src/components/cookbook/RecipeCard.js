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
`;
const Description = styled.p`
  color: rgb(70, 67, 58);
  padding-top: 10px;
  text-align: center;
`;
export default class RecipeCard extends Component {
  render() {
    return (
      <Card>
        {this.props.recipes.map((item, index) => {
          var imagePath =
            window.location.origin + "/apps/assets/images/" + item.image;
          return (
            <a key={index}>
              <Title title={item.recipeName} />
              <Image source={imagePath} text={item.recipeName} />
              <Description>{item.description}</Description>
            </a>
          );
        })}
      </Card>
    );
  }
}
