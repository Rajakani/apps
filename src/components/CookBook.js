import React, { Component } from "react";
import styled from "styled-components";
import RecipeMaker from "./cookbook/RecipeMaker";
import RecipeCard from "./cookbook/RecipeCard";
import axios from "axios";
const Wrapper = styled.section`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;
export default class CookBook extends Component {
  state = {
    recipes: jsonData,
  };

  render() {
    return (
      <Wrapper>
        <RecipeCard recipes={this.state.recipes}></RecipeCard>
      </Wrapper>
    );
  }
}

const jsonData = [
  {
    id: 1,
    recipeName: "Tea",
    image: "1-tea.jpg",
    liquidUnit: "milliLitre",
    solidUnit: "gram",
    servings: "1pax",
    description:
      "A hot drink made by infusing the dried crushed leaves of the tea plant in boiling water.",
    prepTime: "10 mins",
    totalTime: "10 mins",
    categories: [
      {
        id: 1,
        name: "Hot Beverage",
      },
    ],
    ingredients: [
      {
        id: 1,
        IngredientName: "Water",
        Quantity: 100,
      },
      {
        id: 2,
        IngredientName: "Milk",
        Quantity: 100,
      },
      {
        id: 3,
        IngredientName: "Sugar",
        Quantity: 10,
      },
      {
        id: 4,
        IngredientName: "Tea Powder",
        Quantity: 5,
      },
    ],
    steps: [
      {
        Step1: "Keep the Water and Milk in a bowl and boil",
      },
      {
        Step2: "Once it boils add Tea Powder",
      },
      {
        Step3: "Reduce the flame and stir. Let it boil for some more time",
      },
      {
        Step4: "Turn off the gas and strain the tea powder",
      },
      {
        Step5: "Add Sugar to taste and serve hot in a cup",
      },
    ],
    Benefits: [],
    variants: [
      {
        id: 2,
        recipeName: "Black Tea",
      },
      {
        id: 3,
        recipeName: "Masala Tea",
      },
    ],
    recipesWithSameIngredients: [
      {
        id: 2,
        recipeName: "Black Tea",
      },
      {
        id: 3,
        recipeName: "Masala Tea",
      },
    ],
    MaterialsRequired: [
      {
        id: 150,
        Name: "Tea Strainer",
        amazonUrl: "",
      },
    ],
    popularity: {
      totalPersonsTried: 10,
    },
  },
];
