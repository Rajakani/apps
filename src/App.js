import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import CookBook from "./components/CookBook";
import AddRecipe from "./components/cookbook/AddRecipe";
import Context from "./Context";
import data from "./Data";
import Login from "./components/Login";
import { NoMatch } from "./components/NoMatch";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: this.getRecipes(),
		};
		this.routerRef = React.createRef();
	}
	getRecipes() {
		let recipes = eval(localStorage.getItem("recipes"));
		recipes = recipes ? JSON.parse(recipes) : data.recipes;
		return recipes;
	}
	componentDidMount() {
		let user = localStorage.getItem("user");
		let recipes = this.getRecipes();
		user = user ? JSON.parse(user) : null;

		this.setState({ user, recipes });
	}
	login = (usn, pwd) => {
		let user = data.users.find((u) => u.username === usn && u.password === pwd);
		if (user) {
			this.setState({ user });
			localStorage.setItem("user", JSON.stringify(user));
			return true;
		}
		return false;
	};
	logout = (e) => {
		e.preventDefault();
		this.setState({ user: null });
		localStorage.removeItem("user");
	};
	addRecipe = (recipe, callback) => {
		let recipes = this.state.recipes.slice();
		recipes.push(recipe);
		localStorage.setItem("recipes", JSON.stringify(recipes));
		this.setState({ recipes }, () => callback && callback());
	};
	render() {
		return (
			<Context.Provider
				value={{
					...this.state,
					login: this.login,
					logout: this.logout,
					AddRecipe: this.addRecipe,
					recipes: this.state.recipes,
				}}>
				<React.Fragment>
					<Router ref={this.routerRef}>
						<NavigationBar></NavigationBar>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/login" component={Login} />
							<Route path="/cookbook" component={CookBook} />
							<Route exact path="/add-recipe" component={AddRecipe} />
							<Route component={NoMatch} />
						</Switch>
					</Router>
				</React.Fragment>
			</Context.Provider>
		);
	}
}
