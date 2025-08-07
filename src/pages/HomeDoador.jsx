export default function HomeDoador() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-indigo-900 text-white p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Bem-vindo, Doador</h1>
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
          Sair
        </button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-green-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Total doado</h2>
          <p className="text-3xl font-bold mt-2">R$ 3.500</p>
        </div>
        <div className="bg-green-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Alunos ajudados</h2>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>
        <div className="bg-green-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Impacto</h2>
          <p className="text-3xl font-bold mt-2">Alto</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Pedidos disponíveis</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-indigo-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Maria, Direito</h3>
            <p className="mb-2">Precisa de R$ 500 para pagar a mensalidade</p>
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">
              Doar agora
            </button>
          </div>
          <div className="bg-indigo-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">João, Engenharia</h3>
            <p className="mb-2">Precisa de R$ 300 para comprar apostilas</p>
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">
              Doar agora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}