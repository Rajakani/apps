import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 4%;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding: 10px;
`;
const StyledNavItem = styled.div`
  height: 10%;
  width: 4%; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 1.8em;
    color: ${(props) => props.active ? "white" : "#9FFFCB"};
    :hover {
      opacity: 0.7;
      text-decoration: none;
    }  
  }
`;
const NavIcon = styled.div`
`;


class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
      }

    render() {
        const { active } = this.props;
      return (
        <StyledNavItem active={active}>
        <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
          <NavIcon></NavIcon>
        </Link>
      </StyledNavItem>
      );
    }
  }

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activePath: props.location.pathname,
          items: [
            {
              path: '/', /* path is used as id to check which NavItem is active basically */
              name: 'Home',
              css: 'fa fa-fw fa-home',
              key: 1 
            },
            {
              path: '/cookbook',
              name: 'CookBook',
              css: 'fa fa-fw fa-utensils',
              key: 2
            },
            {
              path: '/NoMatch',
              name: 'NoMatch',
              css: 'fas fa-search',
              key: 3
            },
          ]
        }  
      }
      onItemClick = (path) => {
        this.setState({ activePath: path }); 
      }
      
    render() {
        const { items, activePath } = this.state;
      
        return (
            <StyledSideNav>
            {                
                items.map((item) => {               
                return (
                    <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key}/>
                )
                })
            }
            </StyledSideNav>
  );
      }
}


export default class Sidebar extends React.Component {
  render() {
    const RouterSideNav = withRouter(SideNav);
    return (
        <RouterSideNav></RouterSideNav>
    );
  }
}