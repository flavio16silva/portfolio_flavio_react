import { projects } from "../data/projects"
import { skills } from "../data/skills"

const Projects = () => {
  // Buscar ícone GitHub do array de skills
  const getGitHubIcon = () => {
    return skills.find(skill => skill.name.toLowerCase() === "github")?.icon || null
  }

  const GithubIcon = getGitHubIcon()

  // Buscar dados da tecnologia
  const getTechData = (techName) => {
    const skill = skills.find(skill =>
      skill.name.toLowerCase() === techName.toLowerCase()
    )
    return skill ? {
      Icon: skill.icon,
      color: skill.color || "text-gray-700 dark:text-gray-300"
    } : null
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-black" >
      <section id="projects">
        {/* Cabeçalho */}
        <div className="text-center mb-12 mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meus Projetos
          </h2>
        </div>

        {/* Grid - 2 cards por linha */}
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <li key={project.id}>
              {/* Card Único com hover em tudo */}
              <div className="group flex flex-col lg:flex-row dark:hover:bg-gray-900 rounded-xl shadow-xl/30 overflow-hidden transition-all duration-300 h-full
              hover:border-2 hover:border-[rgb(10,255,169)]
              ">

                {/* Imagem - Lado Esquerdo */}
                <div className="lg:w-2/5 p-4 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-contain"
                  />
                </div>

                {/* Informações - Lado Direito */}
                <div className="lg:w-3/5 p-6 flex flex-col grow">

                  {/* Cabeçalho do Card */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white animate-pulse">
                      {project.title}
                    </h3>
                    <a
                      href={project.repoLink}
                      className="text-gray-700 dark:text-gray-300 transition-colors hover:text-[rgb(10,255,169)]"
                      target="_blank"
                      rel="noopener noreferrer"
                    // title="Ver código"
                    >
                      {GithubIcon && <GithubIcon className="w-6 h-6" />}
                    </a>
                  </div>

                  {/* Descrição */}
                  <p className="text-white text-sm leading-relaxed mb-6 grow">
                    {project.description.replace(/<[^>]*>/g, '')}
                  </p>

                  {/* Tecnologias */}
                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, index) => {
                        const techData = getTechData(tech)

                        return techData && (
                          <div
                            key={index}
                            className="flex items-center justify-center p-2 text-sm"
                          >
                            <techData.Icon
                              className={`text-white hover:text-[rgb(10,255,169)] text-3xl transition-colors duration-200`} />
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Rodapé */}
        <div className="mt-12 text-center">
          <p className="text-lg italic text-gray-400">
            O único limite para a realização do amanhã são as dúvidas de hoje.
          </p>
        </div>
      </section>
    </div>
  )
}

export { Projects }