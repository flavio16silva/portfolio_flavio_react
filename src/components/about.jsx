import { skills } from "../data/skills"

const About = () =>
  <div className="text-white min-h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/bg-sobre.jpg')" }}>

    <div className="max-w-7xl mx-auto px-12 md:px-24 lg:px-32 pt-40 pb-12">
      <div className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Olá! Sou Flávio Silva 
        </h1>

        <p className="text-justify leading-relaxed">
          Desenvolvedor Front End, um entusiasta de desenvolvimento Front-End em busca constante
          de conhecimento e aprendizado nas mais recentes tecnologias. Embora minha experiência
          em desenvolvimento web seja recente, tenho dedicado meu tempo a trabalhar com diversas
          tecnologias e plataformas, com o objetivo de criar soluções que atendam de forma eficaz
          às necessidades dos clientes. Desenvolvedor Front-End em crescimento através de experiências
          com criação de projetos escaláveis e responsivos. Sou atraído por criar soluções tecnológicas
          e pesquisas que me impulsionam na direção dos projetos de Back-End, resolvendo problemas reais
          e agregando valor aos usuários. A cada desafio, meu desejo de explorar o mundo do desenvolvimento
          de Back-End cresce, e estou empolgado para embarcar nessa nova etapa da minha carreira.
          Desafios complexos são minha motivação, e estou sempre em busca de soluções inovadoras e
          criativas para superá-los. A cada dia, reservo tempo para aprofundar meu entendimento e
          aprimorar minhas habilidades nas tecnologias atuais. Minha paixão pela aprendizagem constante
          é o motor que impulsiona meu crescimento profissional. Estou ansioso para enfrentar novos
          desafios e contribuir para projetos empolgantes.
        </p>
      </div>

      <div className="my-12 border-t border-gray-600/50"></div>

      {/* Tecnologias COMPACTAS */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
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





{/* <div className="header__right">
      <div className="header__image">
        <img src="/images/flaviosilva.jpg" alt="Flavio Silva" className="flavio" />
        <img src="/images/abstract.svg" alt="background" className="background" />
      </div>
    </div> */}



