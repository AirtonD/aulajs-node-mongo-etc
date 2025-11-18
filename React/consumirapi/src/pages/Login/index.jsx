import React from "react";

import { toast } from "react-toastify";
import { isEmail } from "validator";
import { useDispatch } from 'react-redux';

import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import * as actions from "../../store/modules/auth/actions";

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error("Senha inválida");
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error("E-mail inválido");
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password }));
  }

  return (
    <>
      <Container>
        <h1> Login </h1>

        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Acessar</button>
        </Form>
      </Container>
    </>
  );
}
