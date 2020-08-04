import React, { Component } from "react";
import withContext from "../withContext";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";
const Styles = styled.div`
	.navbar {
		background-color: rgb(229, 221, 203);
		border: 2px #solid red;
		border-bottom: blue;
	}
	a,
	.navbar-nav,
	.navbar-light .nav-link {
		color: grey;
		&:hover {
			color: white;
		}
	}
	.navbar-brand {
		font-size: 1.4em;
		color: rgb(235, 123, 89);
		&:hover {
			color: white;
		}
	}
	.form-center {
		position: absolute !important;
		left: 25%;
		right: 25%;
	}
`;
class NavigationBar extends Component {
	state = {};
	render() {
		return (
			<Navbar expand="lg">
				<Navbar.Brand href="/">THINK + CAFE</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Item>
							<Nav.Link href="/">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/cookbook">Cook Book</Nav.Link>
						</Nav.Item>
						{!this.props.context.user ? (
							<Nav.Item>
								<Nav.Link href="/login">Login</Nav.Link>
							</Nav.Item>
						) : (
							<a className="navbar-item" onClick={this.props.context.logout}>
								Logout
							</a>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default withContext(NavigationBar);
