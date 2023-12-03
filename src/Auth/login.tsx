import React, { useEffect, useState } from "react";
import {
  LoginPageContainer,
  LoginForm,
  FormLabel,
  FormInput,
  ContentLogin,
  Button,
  HeaderLogo,
  HeaderTitle,
  ErrorMsg,
} from "../styles/styled";
import { LoginFormState } from "../types";
import axios from "axios";
import Loading from "../components/Loading";
import { authUrl } from "../common";

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormState>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(authUrl, formData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        window.location.reload();
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          setError(err.response.data.message);
        } else {
          setError(err?.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={handleSubmit}>
        {error.length > 0 ? <ErrorMsg>{error}</ErrorMsg> : ""}
        <ContentLogin>
          <HeaderLogo>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="31"
              viewBox="0 0 21 31"
              fill="none"
            >
              <path
                d="M17.1397 13.9152C17.1397 14.0698 17.1397 14.2244 17.1397 14.4564C17.1397 18.1671 14.1287 21.2594 10.3456 21.2594C7.56618 21.2594 5.09558 19.5586 4.09191 17.0848C4.09191 16.9302 4.09191 16.8529 4.09191 16.6983C4.09191 12.9875 7.10293 9.89526 10.886 9.89526C13.6654 9.89526 16.0588 11.5187 17.1397 13.9152L17.0625 0C7.64337 0 0 7.65337 0 17.0848H3.93748V31C13.3566 31 21 23.3466 21 13.9152H17.1397Z"
                fill="#6153CD"
              />
            </svg>
          </HeaderLogo>
          <HeaderTitle>Digital agency</HeaderTitle>
        </ContentLogin>
        <FormLabel htmlFor="username">Username:</FormLabel>
        <FormInput
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <FormLabel htmlFor="password">Password:</FormLabel>
        <FormInput
          type={`${showPassword ? "text" : "password"}`}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <FormLabel>
          <FormInput
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </FormLabel>

        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default Login;
