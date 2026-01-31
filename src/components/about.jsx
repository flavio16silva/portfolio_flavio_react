import { skills } from "../data/skills"

const About = () =>
  <>
    <section className="grid grid-cols-3 sm:grid-cols-4 gap-4">
      {skills.map((skill, index) => {
        const Icon = skill.icon;

        return (
          <div
            key={index}
            className="flex flex-col items-center text-black transition hover:text-[rgb(10,255,169)]"
          >
            <Icon
              className={`text-4xl ${skill.color} transition-colors`}
            />
            <span className="text-sm">{skill.name}</span>
          </div>
        );
      })}

    </section>
  </>

export { About }

/*
<div className="header__left">
      <h1>Olá! Sou Flávio Silva Desenvolvedor Front End</h1>
      <p className="texto">Hoje, <span className="escrever-texto"></span></p>
      <p>
        Olá, sou Flávio Silva, um entusiasta de desenvolvimento Front-End em busca constante de conhecimento e aprendizado nas mais recentes tecnologias.
        Embora minha experiência em desenvolvimento web seja recente, tenho dedicado meu tempo a trabalhar com diversas tecnologias e plataformas,
        com o objetivo de criar soluções que atendam de forma eficaz às necessidades dos clientes.
        Desenvolvedor Front-End em crescimento através de experiências com criação de projetos escaláveis e responsivos.
        Sou atraído por criar soluções tecnológicas e pesquisas que me impulsionam na direção dos projetos de Back-End,
        resolvendo problemas reais e agregando valor aos usuários. A cada desafio, meu desejo de explorar o mundo do desenvolvimento de Back-End cresce,
        e estou empolgado para embarcar nessa nova etapa da minha carreira.
        Desafios complexos são minha motivação, e estou sempre em busca de soluções inovadoras e criativas para superá-los.
        A cada dia, reservo tempo para aprofundar meu entendimento e aprimorar minhas habilidades nas tecnologias atuais.
        Minha paixão pela aprendizagem constante é o motor que impulsiona meu crescimento profissional.
        Estou ansioso para enfrentar novos desafios e contribuir para projetos empolgantes.
      </p>
    </div>

    <div className="header__right">
      <div className="header__image">
        <img src="/images/flaviosilva.jpg" alt="Flavio Silva" className="flavio" />
        <img src="/images/abstract.svg" alt="background" className="background" />
      </div>
    </div>


*/