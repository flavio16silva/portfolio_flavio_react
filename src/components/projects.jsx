import { projects } from "../data/projects"
import { skills } from "../data/skills"

const Projects = () => {
  // Buscar ícone GitHub do array de skills
  const getGitHubIcon = () => {
    return skills.find(skill => skill.name.toLowerCase() === "github")?.icon || null
  }

  const GithubIcon = getGitHubIcon()

  const getTechData = (techName) => {
    const skill = skills.find(skill => skill.name.toLowerCase() === techName.toLowerCase()
    )

    return skill ? {
      Icon: skill.icon,
      color: skill.color || "text-gray-700 dark:text-gray-300"
    } : null
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 pt-20">
          Projetos
        </h2>
      </div>

      {/* Grid - 3 colunas de cards com tamanhos uniformes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="h-full">
            {/* Card com altura e largura fixas */}
            <div className="group flex flex-col bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-[rgb(10,255,169)] h-full w-full">

              {/* Container da imagem com tamanho fixo */}
              <div className="w-full h-48 p-4 flex items-center justify-center bg-gray-800/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 p-5 flex flex-col">

                <h3 className="text-lg font-bold text-white mb-3 min-h-14 line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 min-h-20 line-clamp-4 flex-1 text-justify">
                  {project.description.replace(/<[^>]*>/g, '')}
                </p>

                <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                  {/* Ícone GitHub - sempre no final */}
                  <div className="flex items-center">
                    <a
                      href={project.repoLink}
                      className="text-gray-400 transition-colors hover:text-[rgb(10,255,169)] flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {GithubIcon && <GithubIcon className="w-5 h-5" />}
                    </a>
                  </div>

                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 justify-end">
                      {project.tech.map((tech, index) => {
                        const techData = getTechData(tech)
                        return techData && (
                          <div key={index} className="flex items-center justify-center">
                            <techData.Icon className="text-white hover:text-[rgb(10,255,169)] text-xl transition-colors duration-200" />
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Projects }