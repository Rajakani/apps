import React, { Component } from "react";
import RecipeCard from "./RecipeCard";

import styled from "styled-components";
const GridWrapper = styled.div`
	display: grid;
	grid-gap: 3%;
	grid-template-columns: repeat(12, 1fr);
	grid-auto-rows: minmax(25px, auto);
`;

export default class RecipeCards extends Component {
	render() {
		return (
			<GridWrapper>
				{this.props.recipes.map((item, index) => {
					return <RecipeCard key={index} recipe={item}></RecipeCard>;
				})}
			</GridWrapper>
		);
	}
}
