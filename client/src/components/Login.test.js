import React from "react";
import { render, fireEvent, screen } from "../test-utils";
import Login from "./Login";
import reducer, { initialState } from "../redux/reducers";

describe("Login test suite", () => {
  it("should render Login screen", () => {
    const {  getByText, getByLabelText } = render(<Login />, {
      initialState: initialState,
      reducer: reducer.login,
    });
    expect(getByLabelText(/email:/i)).toBeInTheDocument();
    expect(getByLabelText(/password:/i)).toBeInTheDocument();
    expect(getByText(/log in/i)).toBeInTheDocument();

  });
  it("should fire event on hooks", () => {
     render(<Login />, {
      initialState: initialState,
      reducer: reducer.login,
    });

    fireEvent.click(screen.getByText('Log in'));
  });
});
