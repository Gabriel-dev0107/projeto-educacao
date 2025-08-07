import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import alunoImg from '/src/assets/aluno.png';
import logo from '/src/assets/logo.png';
import '/src/style/LoginAluno.css';

const LoginAluno = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const alunoSalvo = JSON.parse(localStorage.getItem('aluno'));

    if (alunoSalvo && alunoSalvo.email === email && alunoSalvo.senha === senha) {
      navigate('/home/aluno');
    } else {
      setErro('Email ou senha inválidos.');
    }
  };

  return (
    <div className="login-container">
      <img src={alunoImg} alt="Aluno estudando" className="background-image" />
      <img src={logo} alt="Logo EducAção" className="logo" />

      <div className="login-form">
        <h2>Bem-vindo, Aluno</h2>
        <p className="mb-4">Faça login para continuar</p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" />

          <label htmlFor="senha">Senha</label>
          <input id="senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" />

          <button type="submit">Entrar</button>
        </form>

        {erro && <p style={{ color: 'red', marginTop: '10px' }}>{erro}</p>}

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Ainda não tem conta? <a href="/cadastro/aluno">Cadastre-se aqui</a>
        </p>
        <p style={{ marginTop: '10px' }}>
          <a href="#">Esqueci minha senha</a>
        </p>
      </div>
    </div>
  );
};

export default LoginAluno;