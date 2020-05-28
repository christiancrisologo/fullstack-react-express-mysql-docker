import React from "react";
import { render, fireEvent, screen } from "../test-utils";
import App from "./App";
import reducer, { initialState } from "../redux/reducers";

describe("App test suite", () => {
  it("should render application screen", () => {
    const { getByText, getByLabelText } = render(<App />, {
      initialState: initialState,
      reducer: reducer.app,
    });
    expect(getByText(/user login/i)).toBeInTheDocument();
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
  });
});
