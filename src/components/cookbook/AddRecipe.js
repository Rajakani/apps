import React, { Component, Fragment } from "react";
import withContext from "../../withContext";
import { Redirect } from "react-router-dom";

const initState = {
	id: 100,
	recipeName: "",
	description: "",
	title: "",
};
class AddRecipe extends Component {
	constructor(props) {
		super(props);
		this.state = initState;
		this.handleChange = this.handleChange.bind(this);
		this.save = this.save.bind(this);
	}
	getAddedRecipe() {
		return JSON.parse(JSON.stringify(this.state));
	}
	save = (e) => {
		e.preventDefault();
		var recipe = this.getAddedRecipe();
		if (recipe.recipeName) {
			this.props.context.AddRecipe(recipe, () => this.setState(initState));
		} else {
			this.setState({ error: "Please enter recipe details" });
		}
	};
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value, error: "" });
	};
	render() {
		const defaultRecipe = this.getAddedRecipe();
		const { user } = this.props.context;
		return !(user && user.accessLevel < 1) ? (
			<Redirect to="/" />
		) : (
			<Fragment>
				<form onSubmit={this.save}>
					<div className="columns is-mobile is-centered">
						<div className="column is-one-third">
							<div className="field">
								<label className="label">Recipe Name: </label>
								<input
									className="input"
									type="text"
									name="recipeName"
									value={defaultRecipe.recipeName}
									onChange={this.handleChange}
									required
								/>
							</div>
							<div className="field">
								<label className="label">Title: </label>
								<input
									className="input"
									type="text"
									name="title"
									value={defaultRecipe.title}
									onChange={this.handleChange}
									required
								/>
							</div>
							<div className="field">
								<label className="label">Description: </label>
								<input
									className="input"
									type="text"
									name="description"
									value={defaultRecipe.description}
									onChange={this.handleChange}
									required
								/>
							</div>
							{this.state.error && <div className="error">{this.state.error}</div>}
							<div className="field is-clearfix">
								<button
									className="button is-primary is-outlined is-pulled-right"
									type="submit"
									onClick={this.save}>
									Submit
								</button>
							</div>
						</div>
					</div>
				</form>
			</Fragment>
		);
	}
}

export default withContext(AddRecipe);
