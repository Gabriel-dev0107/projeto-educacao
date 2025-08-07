import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginAluno from '/src/pages/LoginAluno';
import LoginDoador from '/src/pages/LoginDoador';
import RegisterAluno from '/src/pages/RegisterAluno';
import RegisterDoador from '/src/pages/RegisterDoador';
import Home from '/src/pages/HomeAluno'; // você pode criar esse arquivo com uma mensagem simples

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login/aluno" element={<LoginAluno />} />
        <Route path="/login/doador" element={<LoginDoador />} />
        <Route path="/cadastro/aluno" element={<RegisterAluno />} />
        <Route path="/cadastro/doador" element={<RegisterDoador />} />
        <Route path="/home/aluno" element={<Home />} />
        <Route path="*" element={<LoginAluno />} /> {/* redireciona para login padrão */}
      </Routes>
    </Router>
  );
}

export default App;