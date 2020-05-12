import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';


import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório.'),
  email: Yup.string()
    .email('Insira um e-mail valido.')
    .required('Email é obrigatório.'),
  password: Yup.string()
    .min(6, 'Minimo 6 caracteres.')
    .required('Senha é obrigatória.'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
      dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">Criar Conta</button>
        <span>
          Ja possui uma conta? <Link to="/">Login</Link>
        </span>
      </Form>
    </>
  );
}