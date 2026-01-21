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
      <section id="sobre">
        <h2>Sobre</h2>
        <p>
          Texto sobre mim.
        </p>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades">
        <h2>Habilidades</h2>
      </section>

      {/* PROJETOS */}
      <section id="projetos">
        <h2>Projetos</h2>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 - Flávio Silva</p>
      </footer>
    </>
  )
}

export { App }
