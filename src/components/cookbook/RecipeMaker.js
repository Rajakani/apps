import React from 'react';
import styled from "styled-components";
import { Form, FormControl } from 'react-bootstrap';

const StyledRecipeMaker = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  min-height: 20%;
  width: 90%;     /* Set the width of the sidebar */
  background-color: #091742; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
    margin-left: 5%;
    margin-top: 1%;

    .form-center {
        position: absolute !important;
        top: 10%;
        left: 25%;
        right: 25%;
      }
`;

export default class RecipeMaker extends React.Component {
    render() {
      return (

        <StyledRecipeMaker>
             <Form className="form-center">
                <FormControl type="text" placeholder="Pick Ingredients" className="" />
             </Form>
        </StyledRecipeMaker>

      );
    }
  }