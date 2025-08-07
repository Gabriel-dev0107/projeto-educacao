import React from "react";
import { motion } from "framer-motion";
import Button from "/src/components/ui/Button.jsx";
import { ArrowRight, BookOpen, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function LandingPage() {
   const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-br from-blue-100 to-blue-300">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Educação para Todos
          </motion.h1>
          <p className="text-lg mb-8">
            Conectamos alunos dedicados a doadores generosos para transformar o
            futuro através da educação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => navigate("/login/aluno")}
              className="bg-blue-600 text-white hover:bg-blue-700 text-lg"
            >
              <BookOpen className="mr-2" /> Sou Aluno
            </Button>

            <Button
              onClick={() => navigate("/login/doador")}
              className="bg-green-600 text-white hover:bg-green-700 text-lg">
              <Heart className="mr-2" /> Quero Doar
            </Button>
          </div>
        </div>

        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src="/src/assets/landingPage.png"
          alt="Ilustração aluno e doador"
          className="max-w-md mt-10 md:mt-0"
        />
      </section>

      {/* Como Funciona */}
      <section className="bg-white py-20 px-6 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10"
        >
          Como Funciona
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "1. Cadastro",
              description:
                "Alunos e doadores criam uma conta em poucos passos.",
            },
            {
              title: "2. Conexão",
              description:
                "Doadores encontram perfis de alunos e decidem ajudar.",
            },
            {
              title: "3. Transformação",
              description: "Juntos, criamos oportunidades reais de mudança.",
            },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        © 2025 EducAção. Todos os direitos reservados.
      </footer>
    </div>
  );
}
