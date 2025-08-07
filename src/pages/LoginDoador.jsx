import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/style/LoginDoador.css';
import logo from '/src/assets/logo.png';
import doadorImg from '/src/assets/doador.png';

const LoginDoador = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const doadorSalvo = JSON.parse(localStorage.getItem('doador'));

    if (doadorSalvo && doadorSalvo.email === email && doadorSalvo.senha === senha) {
      navigate('/home/doador');
    } else {
      setErro('Email ou senha inválidos.');
    }
  };

  return (
    <div className="login-container">
      <img src={doadorImg} alt="Fundo Doador" className="background-image" />
      <img src={logo} alt="Logo" className="logo" />

      <form className="login-form" onSubmit={handleLogin}>
        <h2>Bem-vindo, Doador!</h2>
        <p className='mb-4'>Faça login para ajudar um estudante</p>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Entrar</button>

        {erro && <p style={{ color: 'red', marginTop: '10px' }}>{erro}</p>}

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Ainda não tem conta?{" "}
          <a href="/cadastro/doador">Cadastre-se aqui</a>
        </p>

        <p style={{ marginTop: '10px' }}>
          <a href="#">Esqueci minha senha</a>
        </p>
      </form>
    </div>
  );
};

export default LoginDoador;