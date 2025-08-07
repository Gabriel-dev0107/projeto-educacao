import React, { useState } from "react";
import doadorCadastroImg from "/src/assets/cadastro.png";
import logo from "/src/assets/logo.png";

export default function RegisterAluno() {
  const [cadastroConcluido, setCadastroConcluido] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Salvar no localStorage
    const novoAluno = {
      nome,
      email,
      senha,
    };

    localStorage.setItem("aluno", JSON.stringify(novoAluno));
    setCadastroConcluido(true);
  };

  return (
    <div className="relative w-full h-screen">
      <img
        src={doadorCadastroImg}
        alt="Fundo aluno"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <img src={logo} alt="Logo" className="absolute top-6 left-6 w-32 z-10" />

      <div className="absolute top-1/2 left-[61%] transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-2xl p-10 w-[350px] z-10 shadow-lg text-white">
        {!cadastroConcluido ? (
          <>
            <h1 className="text-2xl font-bold mb-6">Cadastro – Aluno</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nome Completo"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full p-3 rounded bg-white/80 text-black placeholder:text-gray-600"
              />
              <input
                type="email"
                placeholder="E-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded bg-white/80 text-black placeholder:text-gray-600"
              />
              <input
                type="password"
                placeholder="Senha"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full p-3 rounded bg-white/80 text-black placeholder:text-gray-600"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold text-white transition"
              >
                Cadastrar
              </button>
            </form>
            <div className="text-center mt-4">
              <a
                href="/login/aluno"
                className="inline-block bg-white text-blue-700 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
              >
                Voltar para o Login
              </a>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-bold">
              Cadastro concluído com sucesso!
            </h2>
            <a
              href="/login/aluno"
              className="inline-block mt-4 bg-white text-blue-700 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Ir para o Login
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
