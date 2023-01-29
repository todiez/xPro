import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { api } from './api';

const mockCreateItem = (api.createItem = jest.fn());

test('add items to list', async () => {
  const todoText = "Learn React";
  mockCreateItem.mockResolvedValueOnce(todoText);

  const {getByText, getByLabelText} = render(<App></App>);

  //enter content, interact with page
  const input = getByLabelText("Add todo:");
  fireEvent.change(input, {target:{value:"wash car"}});
  fireEvent.click(getByText("Add #1"));

  await wait(() => getByText("wash car"));

  //confirm data
  expect(mockCreateItem).toBeCalledTimes(1);
  expect(mockCreateItem).toBeCalledWith(
    expect.stringContaining("wash car")
  );

});

// test('TODO', () => {
//   const {getByText, getByLabelText} = render(<App></App>);
//   //after rendering the component
//   //use DOM APIs (query selector) to make assertions

//   //simple test: looking for an h1 with content of "TODO"
//   getByText("TODO");
//   getByLabelText("Add todo:");
//   getByText("Add #1");
// });

// test('add items to list', () => {
//   const {getByText, getByLabelText} = render(<App></App>);

//   getByText("TODO");
//   const input = getByLabelText("Add todo:");
//   fireEvent.change(input, {target:{value:"wash car"}});
//   fireEvent.click(getByText("Add #1"));

//   //confirm data
//   getByText("Add #2");
//   getByText("wash car");
// });

// //userEvent expresses intent better
// test('user-events allows users to add...', () => {
//   const {getByText, getByLabelText} = render(<App></App>);

//   const input = getByLabelText("Add todo:");
//   const button = getByText("Add #1");

//   userEvent.type(input, "Learn spahish");
//   userEvent.click(button);

//   getByText("Add #2");
//   getByText("Learn spahish");
// });



// jest.mock("./MyComponent", () => () => <div>Hello, World!</div>);

// test('mocking test', () => {
//   const {container} = render(<App/>);
//   expect (container.textContent).toMatch('Hello, World!');
// });
