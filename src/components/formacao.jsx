import { formacao } from "../data/formacao"

const Formacao = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-black" >
      <div className="container mx-auto py-8 px-4 bg-black">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 mt-20">
          Formação
        </h2>

        <div className="max-w-6xl mx-auto bg-black">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {formacao.map(item => (
              <div key={item.id}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-[rgb(10,255,169)] hover:shadow-lg hover:shadow-[rgb(10,255,169)/10] transition-all duration-300"
              >
                <h3 className="text-[rgb(10,255,169)] font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="w-1 h-5 bg-[rgb(10,255,169)] rounded-full"></span>
                  Curso:
                </h3>
                <p className="text-white mb-4 leading-relaxed pl-3">{item.curso}</p>

                <h3 className="text-[rgb(10,255,169)] font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="w-1 h-5 bg-[rgb(10,255,169)] rounded-full"></span>
                  Local:
                </h3>
                <p className="text-white mb-4 pl-3">{item.local}</p>

                <h3 className="text-[rgb(10,255,169)] font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="w-1 h-5 bg-[rgb(10,255,169)] rounded-full"></span>
                  Ano:
                </h3>
                <p className="text-white pl-3">{item.ano}</p>
              </div>
            ))}
          </div>
        </div>
      </div >
    </div>
  )
}

export { Formacao }