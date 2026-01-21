const App = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div class="navbar__content max-width mb-0">
          <a href="/">
            <img src="assets/coffeeTres.png" alt="Flavio Silva" />
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
      <header>
        <h2>Olá, eu sou Flávio</h2>
        <p>Desenvolvedor Frontend</p>
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
