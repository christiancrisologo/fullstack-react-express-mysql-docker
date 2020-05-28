import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as EmailIcon } from "../assets/email.svg";
import { ReactComponent as PasswordIcon } from "../assets/password.svg";
import { Container } from "./Containers";
import {
  FormControl,
  FormContainer,
  InputField,
  ActionButtons,
} from "./FormFields";
import * as actions from "../redux/actions";

const LoginButton = styled.button`
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

const SignUpButton = styled.button`
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

const Login = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.login);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const changeHandler = React.useCallback(
    (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
    [values]
  );

  const signUpHandler = React.useCallback(() => {
    actions.changePage("signup")(dispatch);
  }, [dispatch]);

  const loginHandler = React.useCallback(() => {
    actions.login(values)(dispatch);
  }, [values, dispatch]);

  return (
    <Container>
      <FormContainer>
        <h4>USER LOGIN</h4>
        {message && <p>{message}</p>}
        <FormControl>
          <InputField
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            onChange={changeHandler}
          />
          <label htmlFor="email">Email:</label>
          <div className="icon">
            <EmailIcon />
          </div>
        </FormControl>
        <FormControl>
          <InputField
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            onChange={changeHandler}
          />
          <label htmlFor="password">Password:</label>
          <div className="icon">
            <PasswordIcon />
          </div>
        </FormControl>
        <ActionButtons>
          <LoginButton
            type="button"
            onClick={loginHandler}
            disabled={!values.email || !values.password}
          >
            Log in
          </LoginButton>
          <SignUpButton type="button" onClick={signUpHandler}>
            Sign up
          </SignUpButton>
        </ActionButtons>
      </FormContainer>
    </Container>
  );
};

export default Login;
