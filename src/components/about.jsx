import { skills } from "../data/skills"

const About = () =>
  <div className="text-white min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
    style={{ backgroundImage: "url('/images/bg-sobre.jpg')" }}>

    <div className="max-w-7xl mx-auto px-12 md:px-24 lg:px-32 pt-30 pb-12">
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Olá! Sou <span className="text-[rgb(10,255,169)]">Flávio Leite da Silva</span>
        </h1>

        <div className="text-justify leading-normal space-y-4">
          <p className="text-sm md:text-lg" >
            <span className="text-[rgb(10,255,169)]">Desenvolvedor Front End em
              formação</span>, atuando na migração de carreira a partir da área de
            suporte técnico. Minha rotina é baseada na constância e na busca
            contínua por conhecimento, com o objetivo de criar soluções
            práticas e eficazes.
          </p>
          <p className="text-sm md:text-lg" >
            Sou formado em Administração, mas sempre tive a
            <span className="text-[rgb(10,255,169)]"> tecnologia no coração </span>
            — especialmente o desenvolvimento. A paixão por transformar ideias
            em código motiva minha jornada e por isso,
            <span className="text-[rgb(10,255,169)]"> começo no Front End</span>.
          </p>
          <p className="text-sm md:text-lg" >
            Atualmente, tenho me dedicado a aprofundar meus estudos em
            <span className="text-[rgb(10,255,169)]"> JavaScript, ReactJS e
              Banco de Dados</span>
            .
          </p>
          <p className="text-sm md:text-lg" >
            Estudo através de cursos e projetos, mas o que
            move meu cotidiano é a prática: <span className="text-[rgb(10,255,169)]"> criar, melhorar e evoluir. </span>
            Cada linha de código me aproxima do meu caminho como desenvolvedor.
          </p>
          <p className="text-sm md:text-lg font-bold text-[rgb(10,255,169)]">
            Que privilégio você aqui. Fique a vontade para descobrir mais.
          </p>
        </div>
      </div>


      <div className="my-6 border-t-2 border-[rgb(10,255,169,0.5)]"></div>

      {/* Tecnologias*/}
      <div>
        <h2 className="text-lg md:text-2xl font-bold mb-8 uppercase">
          Tecnologias
        </h2>

        {/* Grid mais compacto */}
        <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center group"
              >
                <Icon
                  className={`text-3xl md:text-4xl ${skill.color} mb-1 
                           group-hover:scale-110 group-hover:text-[rgb(10,255,169)] transition-transform duration-300`}
                />
                <span className="text-xs md:text-sm 
                               group-hover:text-[rgb(10,255,169)] transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            )
          })}
        </section>
      </div>

    </div>
  </div>

export { About }