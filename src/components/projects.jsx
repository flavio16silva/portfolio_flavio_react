import { projects } from "../data/projects"
import { skills } from "../data/skills"

const Projects = () => {
  // Buscar ícone GitHub do array de skills
  const getGitHubIcon = () => {
    return skills.find(skill => skill.name.toLowerCase() === "github")?.icon || null
  }

  const GithubIcon = getGitHubIcon()

  // Buscar tecnologias
  const getTechData = (techName) => {
    const skill = skills.find(skill => skill.name.toLowerCase() === techName.toLowerCase())
    return skill ? {
      Icon: skill.icon,
      color: skill.color || "text-gray-700 dark:text-gray-300"
    } : null
  }

  return (
    <div className="min-h-screen py-12 bg-black">
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 pt-20">
          Projetos
        </h2>
      </div>

      {/* Grid - 3 colunas com gap maior */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center max-w-7xl mx-auto px-4">
        {projects.map((project) => (
          <div key={project.id} className="w-full flex justify-center">
            {/* Card */}
            <div className="group flex flex-col bg-[#1a1a1a] rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-[rgb(10,255,169)] w-full max-w-95 min-h-120 shadow-[0_0_30px_10px_rgba(255,255,255,0.2)]">

              {/* Container da imagem */}
              <div className="w-full h-52 overflow-hidden bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Conteúdo do card */}
              <div className="p-6 flex flex-col flex-1">
                {/* Título */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-400 text-base text-justify leading-relaxed mb-6 flex-1">
                  {project.description.replace(/<[^>]*>/g, '')}
                </p>

                {/* Linha divisória */}
                <div className="border-t border-gray-800 pt-5 mt-auto">
                  {/* Tecnologias e GitHub */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-4">
                      {project.tech && project.tech.length > 0 && (
                        project.tech.map((tech, index) => {
                          const techData = getTechData(tech)
                          return techData && (
                            <div key={index} className="flex items-center justify-center group/tech">
                              <techData.Icon className="text-gray-400 group-hover/tech:text-[rgb(10,255,169)] text-2xl transition-colors duration-200" />
                            </div>
                          )
                        })
                      )}
                    </div>

                    {/* Ícone GitHub */}
                    <a
                      href={project.repoLink}
                      className="text-gray-400 hover:text-[rgb(10,255,169)] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {GithubIcon && <GithubIcon className="w-6 h-6" />}
                    </a>
                  </div>
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