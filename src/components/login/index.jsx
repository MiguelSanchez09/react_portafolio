import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import './Login.css';
import LoginContext from '../../context/LoginContext';
import { Formik } from 'formik';

function Login() {
  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validId = /^[0-9]+$/;


  const context = useContext(LoginContext);
  const { logged, token } = context;
  const { email } = context.values;
  const [contextEmail, setContextEmail] = email;
  const [valueLogged, setValueLogged] = logged;
  const [valueToken, setValueToken] = token;


  const [valueEmail, setValueEmail] = useState({ campo: '' });
  const [valueId, setValueId] = useState({ campo: '' });
  const [errorEmail, setErrorEmail] = useState('');
  const [errorId, setErrorId] = useState('');

  const navigate = useNavigate();


  useEffect(() => {
    setValueLogged(false);
    // eslint-disable-next-line
  }, []);


  const onChangeEmail = (e) => {
    setValueEmail({ ...valueEmail, campo: e.target.value });
    if (validEmail.test(valueEmail.campo)) {
      setErrorEmail('');
    } else {
      setErrorEmail('* Ingresar un email válido *');
    }
  };
  const onChangeId = (e) => {
    setValueId({ ...valueId, campo: e.target.value });
    if (validId.test(valueId.campo)) {
      setErrorId('');
    } else {
      setErrorId('* Escribir solo números *');
    }
  };


  function login(email) {
    axios
      .post(`${context.baseUrl}/auth/login`, context.values)
      .then((res) => res.data.token)
      .then((token) => {
        setValueToken(token);
        console.log(valueToken);
        setValueLogged(true);
        console.log(valueLogged);
        setContextEmail(email);
        console.log(contextEmail);
        console.log(context);
        navigate('/inicio');
      });
  }

  function onSubmit(e) {
    e.preventDefault();

    const email = document.getElementById('email');
    const id = document.getElementById('discordId');

    context.values.email = email.value;
    context.values.discordId = id.value;

    login(email.value);
  }

  return (
    <Formik>
      <>
    <div className="LoginContainer">
      <h1 data-testid="title">Iniciar Sesión</h1>
      <form onSubmit={onSubmit}>
        <TextField
          onChange={onChangeEmail}
          onKeyUp={onChangeEmail}
          onBlur={onChangeEmail}
          id="email"
          data-testid="email"
          label="Email"
          variant="filled"
          type="email"
          name="email"
          margin="normal"
          helperText={errorEmail}
          required
        />
        <TextField
          onChange={onChangeId}
          onKeyUp={onChangeId}
          onBlur={onChangeId}
          id="discordId"
          label="Discord ID"
          variant="filled"
          type="password"
          name="discordId"
          margin="normal"
          helperText={errorId}
          required
        />
        <Button variant="outlined" type="submit">
          ENVIAR
        </Button>
      </form>
    </div>
    </>
    </Formik>
  );
  
}

export default Login;
