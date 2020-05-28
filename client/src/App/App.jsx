import { hot } from "react-hot-loader/root";
import React from "react";
import { useSelector } from "react-redux";
import GlobalStyle from "../theme";
import { Application } from "./styles";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const App = () => {
  const { page } = useSelector((state) => state);
  return (
    <>
      <Application>{page === "signup" ? <SignUp /> : <Login />}</Application>
      <GlobalStyle />
    </>
  );
};

export default hot(App);
