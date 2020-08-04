import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import withContext from "../withContext";
import RecipeMaker from "./cookbook/RecipeMaker";
import RecipeCards from "./cookbook/RecipeCards";
const Wrapper = styled.section`
	margin-top: 1em;
	margin-left: 6em;
	margin-right: 6em;
`;
class CookBook extends Component {
	constructor(props) {
		const { recipes } = props.context;
		super(props);
		this.state = {
			recipes: recipes,
		};
	}

	render() {
		return (
			<Wrapper>
				<NavLink to="/add-recipe">Add Recipe</NavLink>
				<RecipeCards recipes={this.props.context.recipes}></RecipeCards>
			</Wrapper>
		);
	}
}
export default withContext(CookBook);
