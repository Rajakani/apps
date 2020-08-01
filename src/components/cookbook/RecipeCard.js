import React, { Component } from 'react';
import Title from './Title';
import Image from './Image';
import styled from "styled-components";
const Card = styled.div`
  width: 15em;  
  height: 20em;
	box-sizing: border-box;
	box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	transition: 0.3s;
	border-radius: 2.5px; /* 5px rounded corners */
	border-bottom: 1px solid rgb(204, 204, 204);
	margin-top: 5px;
	background-color: rgb(255, 255, 255)
`
export default class RecipeCard extends Component {
 render(){
  return(
    <Card>
            {this.props.recipes.map((item, index) => {
              var imagePath = window.location.href+"/assets/images/" +item.image
              return (
                <a 
                  key={index} 
                   >
                  <Image source={imagePath} text={item.description} />
                  <Title title={item.recipeName} />
                </a> 
              )
          })}

         </Card>
  )
 }
}