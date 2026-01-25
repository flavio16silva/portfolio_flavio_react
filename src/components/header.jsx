const Header = () =>
  <>
    <header id="header" className="max-width">
      <nav className="navbar">
        <div className="navbar__content max-width mb-0">
          <a href="/">
            <img src="/images/coffeeTres.png" alt="Flavio Silva" />
          </a>
          <ul className="navbar__links">
            <li><a href="#header">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#footer">Contato</a></li>
          </ul>
        </div>
      </nav>
    </header>
  </>

  export { Header }