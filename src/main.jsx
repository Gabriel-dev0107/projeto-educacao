import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";

import "./index.css";
import LoginAluno from "./pages/loginAluno";
import LoginDoador from "./pages/LoginDoador";
import RegisterAluno from "./pages/RegisterAluno";
import RegisterDoador from "./pages/RegisterDoador";
import HomeAluno from "./pages/HomeAluno";
import HomeDoador from "./pages/HomeDoador";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Futuras rotas aqui */}
        <Route path="/login/aluno" element={<LoginAluno />} />
        <Route path="/login/doador" element={<LoginDoador />} />
        <Route path="/cadastro/aluno" element={<RegisterAluno />} />
        <Route path="/cadastro/doador" element={<RegisterDoador />} />
        <Route path="/home/aluno" element={<HomeAluno />} />
        <Route path="/home/doador" element={<HomeDoador />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);