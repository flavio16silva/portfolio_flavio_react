// import logoImg from './assets/coffeeTres.png'

const App = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar__content max-width mb-0">
          <a href="/">
            <img src={'/coffeeTres.png'} alt="Flavio Silva" />
          </a>
          <ul className="navbar__links">
            <li><a href="#header">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#footer">Contato</a></li>
          </ul>
          <div className="navbar__mobile">
            <img src="assets/menu.svg" alt="menu" className="burguer" />
            <ul className="mobile__links">
              <li><a href="#header">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#footer">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <header id="header" className="max-width">
        <div className="header__left">
          <h1>Olá! Sou Flávio Silva Desenvolvedor Front End</h1>
          <p className="texto">Hoje, <span className="escrever-texto"></span></p>

          <p>
            Desenvolvedor Front-End em crescimento através de experiências com criação de projetos escaláveis e responsivos. Sou atraído por criar soluções tecnológicas e pesquisas que me impulsionam na direção dos projetos de Back-End, resolvendo problemas reais e agregando valor aos usuários. A cada desafio, meu desejo de explorar o mundo do desenvolvimento de Back-End cresce, e estou empolgado para embarcar nessa nova etapa da minha carreira.
          </p>
          <a href="#about" className="btn btn-primary">Saiba Mais!<i className="fas fa-arrow-circle-down"></i></a>
        </div>

        <div className="header__right">
          <div className="header__image">
            <img src="assets/flaviosilva.jpg" alt="Flavio Silva" className="flavio" />
            <img src="assets/abstract.svg" alt="background" className="background" />
          </div>
        </div>
      </header>

      {/* SOBRE */}
      <section id="about" className="about max-width">
        <div className="about__left">
          <h2 className="secondary-title">Além do código: quem sou eu?</h2>
          <p>
            Que tal se conectar comigo nas redes sociais abaixo e saber mais sobre
            meu trabalho?
          </p>
          <ul>
            <li>
              <a href="#"><img src="assets/instagram.svg" alt="Instagram" /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/fl%C3%A1vio-silva-7080b848/" target="_blank" ><img src="assets/linkedin.svg" alt="Linkedin" /></a>
            </li>
          </ul>
        </div>
        <div className="about__right">
          <h3 className="tertiary-title mb-m">
            Desenvolvedor Front End descobrindo os caminhos da tecnologia e as soluções criativas.
          </h3>
          <p>
            Olá, sou Flávio Silva, um entusiasta de desenvolvimento Front-End em busca constante de conhecimento e aprendizado nas mais recentes tecnologias. Embora minha experiência em desenvolvimento web seja recente, tenho dedicado meu tempo a trabalhar com diversas tecnologias e plataformas, com o objetivo de criar soluções que atendam de forma eficaz às necessidades dos clientes.
          </p>
          <p>
            Desafios complexos são minha motivação, e estou sempre em busca de soluções inovadoras e criativas para superá-los. A cada dia, reservo tempo para aprofundar meu entendimento e aprimorar minhas habilidades nas tecnologias atuais. Minha paixão pela aprendizagem constante é o motor que impulsiona meu crescimento profissional. Estou ansioso para enfrentar novos desafios e contribuir para projetos empolgantes.

          </p>
        </div>
      </section>

      {/* HABILIDADES */}


      {/* PROJETOS */}


      {/* FOOTER */}
      <footer>
        <p>© 2026 - Flávio Silva</p>
      </footer>
    </>
  )
}

export { App }
