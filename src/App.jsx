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
      <section id="skills" className="skills">
        <div className="skills__content max-width">
          <h2 className="tertiary-title">Minha caixa de ferramentas</h2>
          <p className="description">
            Descubra as habilidades e ferramentas que busco aprender, aprimorar e que me permitem
            criar soluções criativas e funcionais para todos.
          </p>
          <ul>
            <li className="skills__item">
              <div className="image-container">
                <img src="assets/notebook.png" alt="Desenvolvimento Web" />
              </div>
              <h3>Desenvolvimento Web</h3>
              <p>
                No desenvolvimento Front End com foco em tecnologias
                modernas, executando trilhas, desafios e projetos que aprimorem o raciocínio, criatividade e prática.
              </p>
            </li>

            <li className="skills__item">
              <div className="image-container">
                <img src="assets/files.png" alt="Gerenciamentos de versões" />
              </div>
              <h3>Gerenciamentos de versões</h3>
              <p>
                Estudo e experiência em ferramentas de gerenciamento de versão para
                controle de projetos com maior uso de GitHub, com manuseio e testes em GitLab e Bitbucket.
              </p>
            </li>
          </ul>

          <p className="linguagens">Abaixo algumas das linguagens que estudo, prático, crio e executo projetos.</p>

          {/* LINHA DE LINGUAGENS */}
          <div className="conteudo">
            {/* Uma Linha de Habilidades*/}
            <div className="linha" id="caixaskills">
              <div className="bar">
                <div className="info">
                  <img src="assets/html1.png" />
                  <span>HTML</span>
                  <h3>70%</h3>
                </div>
              </div>

              <div className="bar">
                <div className="info">
                  <img src="assets/css1.png" />
                  <span>CSS3</span>
                  <h3>50%</h3>
                </div>
              </div>

              <div className="bar">
                <div className="info">
                  <img src="assets/js.png" />
                  <span>JavaScript</span>
                  <h3>25%</h3>
                </div>
              </div>

              {/*Teste*/}
              <div className="bar">
                <div className="info">
                  <img src="assets/java1.png" />
                  <span>JAVA</span>
                  <h3>15%</h3>
                </div>
              </div>

              <div className="bar">
                <div className="info">
                  <img src="assets/python.png" />
                  <span>PYTHON</span>
                  <h3>10%</h3>
                </div>
              </div>
            </div>
          </div>

          {/*SLIDER - CARDS*/}
          <section id="port">
            <div className="container">
              <h2 className="secondary-title">Rotina de Estudos</h2>
              <p className="linguagens">Considerações de um profissional apaixonado por tecnologia. </p>
              <input type="radio" name="slider" id="item-1" checked />
              <input type="radio" name="slider" id="item-2" />
              <input type="radio" name="slider" id="item-3" />

              {/*Seção dos Cards*/}
              <div className="cards">
                <label className="card" for="item-1" id="panf-1">
                  <img className="foto" src="assets/cards13.png" alt="" />
                  <h1>Web</h1>
                  <p>
                    Nesse campo de trabalho crescente da <strong>Web</strong> busco informações, projetos e criações que podem ser aprimoradas. São rotinas e prazos de entrega que geram melhorias no dinamismo e aceleração das práticas diárias.
                  </p>
                  <a href="#footer"><button>contrate-me</button></a>
                </label>

                <label className="card" for="item-2" id="panf-2">
                  <img src="assets/cards9.jpg" alt="" />
                  <h1>Responsivo</h1>
                  <p>
                    Um campo de estudos e criação de projetos, a <strong>Responsividade</strong> tem proporcionado boas práticas com mobile first gerando desafios e melhorias continuas. As ferramentas de Grid e Flexbox tem amparado e norteado a compreensão da adaptabilidade dos dispositivos.
                  </p>
                  <a href="#footer"><button>contrate-me</button></a>
                </label>

                <label className="card" for="item-3" id="panf-3">
                  <img src="assets/cards7.jpg" alt="" />
                  <h1>Estudos</h1>
                  <p>
                    Explorando projetos com maior grau de complexidade e buscando metas alcançaveis  nos <strong>estudos</strong>, isso tem gerado desafios e bons resultados. São anotações, planejamentos, escolhas de layout e aprimoramento das técnicas de uso das tecnologias.
                  </p>
                  <a href="#footer"><button>contrate-me</button></a>
                </label>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* PROJETOS */}


      {/* FOOTER */}
      <footer>
        <p>© 2026 - Flávio Silva</p>
      </footer>
    </>
  )
}

export { App }
