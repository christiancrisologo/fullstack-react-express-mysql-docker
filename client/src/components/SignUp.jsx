import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Container } from "./Containers";
import {
  FormControl,
  FormContainer,
  InputField,
  ActionButtons,
} from "./FormFields";
import * as actions from "../redux/actions";

const SubmitButton = styled.button`
  width: auto;
  min-width: 100px;
  border-radius: 24px;
  text-align: center;
  padding: 15px 40px;
  margin-top: 5px;
  background-color: #00a0ff;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
  border: none;
  transition: all 0.3s ease;
  outline: 0;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 2px 6px -1px rgba($primary, 0.65);
    &:active {
      transform: scale(0.99);
    }
  }
`;

const BackButton = styled.button`
  width: auto;
  min-width: 100px;
  border-radius: 24px;
  text-align: center;
  padding: 12px 30px;
  margin-top: 5px;
  background-color: #ffffff;
  border: 2px solid #1ca0fe;
  color: #1ca0fe;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  outline: 0;
  margin-left: 4px;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 2px 6px -1px rgba($primary, 0.65);
    &:active {
      transform: scale(0.99);
    }
  }
`;

const SignUp = () => {
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const changeHandler = React.useCallback(
    (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
    [values]
  );

  const backHandler = React.useCallback(() => {
    actions.changePage("login")(dispatch);
  }, [dispatch]);

  const signUpHandler = React.useCallback(() => {
    const body = {
      first_name: values.firstName,
      last_name: values.firstName,
      email: values.email,
      password: values.password,
    };
    actions.signUp(body)(dispatch);
  }, [values, dispatch]);

  return (
    <Container>
      <FormContainer>
        <h4>Account SIGN UP</h4>
        <FormControl>
          <InputField
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            onChange={changeHandler}
          />
          <label htmlFor="email" required>
            Email:
          </label>
        </FormControl>
        <FormControl>
          <InputField
            placeholder="Password"
            type="text"
            name="password"
            id="password"
            onChange={changeHandler}
          />
          <label htmlFor="password" required>
            Password:
          </label>
        </FormControl>
        <FormControl>
          <InputField
            placeholder="First name"
            type="text"
            name="firstName"
            id="firstName"
            onChange={changeHandler}
          />
          <label htmlFor="firstName" required>
            First name:
          </label>
        </FormControl>
        <FormControl>
          <InputField
            placeholder="Last name"
            type="text"
            name="lastName"
            id="lastName"
            onChange={changeHandler}
          />
          <label htmlFor="firstName">Last name:</label>
        </FormControl>
        <ActionButtons>
          <SubmitButton
            type="button"
            onClick={signUpHandler}
            disabled={!values.firstName || !values.password || !values.email}
          >
            Create account
          </SubmitButton>
          <BackButton type="button" onClick={backHandler}>
            Back to log in
          </BackButton>
        </ActionButtons>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
