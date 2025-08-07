export default function HomeAluno() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Bem-vindo, Aluno</h1>
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
          Sair
        </button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-blue-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Pedidos enviados</h2>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
        <div className="bg-blue-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Aprovados</h2>
          <p className="text-3xl font-bold mt-2">1</p>
        </div>
        <div className="bg-blue-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Total Recebido</h2>
          <p className="text-3xl font-bold mt-2">R$ 1.200</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Criar novo pedido</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Motivo" className="p-3 rounded text-black" />
          <input type="number" placeholder="Valor" className="p-3 rounded text-black" />
          <input type="text" placeholder="Curso" className="p-3 rounded text-black" />
          <textarea placeholder="Descrição" className="p-3 rounded text-black md:col-span-2" rows={4} />
          <button className="bg-green-600 hover:bg-green-700 py-3 rounded font-semibold md:col-span-2">
            Enviar Pedido
          </button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Histórico de pedidos</h2>
        <div className="grid gap-4">
          <div className="bg-blue-800 p-4 rounded shadow">
            <p><strong>Motivo:</strong> Material didático</p>
            <p><strong>Valor:</strong> R$ 400</p>
            <p><strong>Status:</strong> <span className="text-yellow-300">Pendente</span></p>
          </div>
          <div className="bg-blue-800 p-4 rounded shadow">
            <p><strong>Motivo:</strong> Mensalidade</p>
            <p><strong>Valor:</strong> R$ 800</p>
            <p><strong>Status:</strong> <span className="text-green-300">Aprovado</span></p>
          </div>
        </div>
      </section>
    </div>
  );
}