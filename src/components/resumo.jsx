const Resumo = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 mt-20 text-white">📄 Currículo</h2>
        </div>

        <div className="bg-gray-900 rounded-lg p-2 border border-gray-800">
          <iframe
            src="/curriculoflavio.pdf"
            className="w-full h-280 rounded-lg"
            title="Currículo"
          />
        </div>
      </div>
    </div>
  )
}

export { Resumo } 