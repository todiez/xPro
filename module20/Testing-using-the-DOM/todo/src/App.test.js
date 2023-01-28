import React from 'react';
import {render} from "@testing-library/react";
import App from './App';


test('renders learn react link', () => {

  const {getByText, getByLabelText} = render(<App></App>);


  //after rendering the component
  //use DOM APIs (query selector) to make assertions

  //simple test: looking for an h1 with content of "TODO"
  getByText("TODO");
  getByLabelText("Add todo:");
  getByText("Add #1");
  
  
});
