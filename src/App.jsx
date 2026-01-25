import { Header } from "./components/header"

const MediaSocial = () => (
  <section>
    <a
      href="https://www.linkedin.com/in/fl%C3%A1vio-silva-7080b848/"
      className="fab fa-linkedin"
      aria-label="LinkedIn"
      target="_blank" rel="noopener noreferrer"
    ></a>
    <a
      href="https://github.com/flavio16silva"
      className="fab fa-github"
      aria-label="GitHub"
      target="_blank" rel="noopener noreferrer"
    ></a>
    <a
      href="mailto:fal_silva@hotmail.com"
      className="fas fa-envelope"
      aria-label="Email"
      target="_blank" rel="noopener noreferrer"
    ></a>
  </section>
)

const Inicio = () =>
  <>
    <div className="home">

      <section>
        <p>Flávio Leite </p>
        <p>da Silva</p>
        <div>
          <p>Desenvolvedor Front-End</p><span>|</span>
          <p>Estudante e futuro Desenvolvedor Full Stack</p>
        </div>
      </section>
      <MediaSocial />
    </div>
  </>

const About = () =>
  <>
    <Header />
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
  </>

const Habilidades = () =>
  <>
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
              <img src="/images/notebook.png" alt="Desenvolvimento Web" />
            </div>
            <h3>Desenvolvimento Web</h3>
            <p>
              No desenvolvimento Front End com foco em tecnologias
              modernas, executando trilhas, desafios e projetos que aprimorem o raciocínio, criatividade e prática.
            </p>
          </li>

          <li className="skills__item">
            <div className="image-container">
              <img src="/images/files.png" alt="Gerenciamentos de versões" />
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
                <img src="/images/html1.png" />
                <span>HTML</span>
                <h3>70%</h3>
              </div>
            </div>

            <div className="bar">
              <div className="info">
                <img src="/images/css1.png" />
                <span>CSS3</span>
                <h3>50%</h3>
              </div>
            </div>

            <div className="bar">
              <div className="info">
                <img src="/images/javascript.png" />
                <span>JavaScript</span>
                <h3>25%</h3>
              </div>
            </div>

            {/*Teste*/}
            <div className="bar">
              <div className="info">
                <img src="/images/python.png" />
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
              <label className="card" htmlFor="item-1" id="panf-1">
                <img className="foto" src="/images/cards_web.png" alt="" />
                <h1>Web</h1>
                <p>
                  Nesse campo de trabalho crescente da <strong>Web</strong> busco informações, projetos e criações que podem ser aprimoradas. São rotinas e prazos de entrega que geram melhorias no dinamismo e aceleração das práticas diárias.
                </p>
                <a href="#footer"><button>contrate-me</button></a>
              </label>

              <label className="card" htmlFor="item-2" id="panf-2">
                <img src="/images/cards_response.jpg" alt="" />
                <h1>Responsivo</h1>
                <p>
                  Um campo de estudos e criação de projetos, a <strong>Responsividade</strong> tem proporcionado boas práticas com mobile first gerando desafios e melhorias continuas. As ferramentas de Grid e Flexbox tem amparado e norteado a compreensão da adaptabilidade dos dispositivos.
                </p>
                <a href="#footer"><button>contrate-me</button></a>
              </label>

              <label className="card" htmlFor="item-3" id="panf-3">
                <img src="/images/cards_estudos.jpg" alt="" />
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
  </>

const Projetos = () =>
  <>
    <section id="projects" className="projects max-width">
      <div className="projects__content">
        <h2 className="secondary-title">Projetos em Destaque</h2>
        <p>
          De ideias abstratas a projetos bem-sucedidos, estão alguns dos
          meus trabalhos mais recentes.
        </p>
      </div>
      <ul>
        <li>
          <section className="trabalhos" id="trabalhos">
            <div className="caixa-conteudo">
              <div className="caixa tilt">
                <img src="/images/Salmo91.png" alt="" />
                <div className="conteudo">
                  <div className="tag">
                    <h3>Salmo 91</h3>
                  </div>
                  <div className="desc">
                    <p>Conheça o código pelo repositório do GitHub</p>
                    <div className="btns">
                      <a href="#" className="btn" target="_blank"
                      >Código <i className="fas fa-code"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="projects__info">
            <h3 className="tertiary-title">
              Efeito Parallax como projeto pessoal.
            </h3>
            <p>
              Meu primeiro projeto envolveu a manipulação de imagens, texto e efeitos de <strong>parallax</strong>. Foi uma oportunidade de aprender sobre responsividade, media queries e o uso de unidades relativas. Como todo começo, enfrentei diversos desafios, dúvidas e, é claro, algumas repetições no processo de aprendizado. No entanto, esses obstáculos iniciais serviram como valiosas lições, ajudando-me a solidificar meu conhecimento e aprimorar minhas habilidades.
            </p>
          </div>
        </li>
        <li className="projects__reversed-list">
          <section className="trabalhos" id="trabalhos">
            <div className="caixa-conteudo">
              <div className="caixa tilt">
                <img src="/images/calculadoraGorjeta.png" alt="" />
                <div className="conteudo">
                  <div className="tag">
                    <h3>Calculadora de Gorjetas</h3>
                  </div>
                  <div className="desc">
                    <p>Conheça o código pelo repositório do GitHub</p>
                    <div className="btns">
                      <a href="#" className="btn" target="_blank"
                      >Código <i className="fas fa-code"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="projects__info">
            <h3 className="tertiary-title">
              Calculadora de Gorjeta
            </h3>
            <p>
              Projeto que despertou a paixão por JavaScript, onde trilhei os passos iniciais. Trabalhando com laços e manipulação do DOM. A aplicação do CSS mostrou-me novos conceitos.
            </p>
          </div>
        </li>
        <li>
          <section className="trabalhos" id="trabalhos">
            <div className="caixa-conteudo">
              <div className="caixa tilt">
                <img src="/images/telaLogin.png" alt="" />
                <div className="conteudo">
                  <div className="tag">
                    <h3>Conceitos de mobile-first</h3>
                  </div>
                  <div className="desc">
                    <p>Conheça o código pelo repositório do GitHub</p>
                    <div className="btns">
                      <a href="#" className="btn" target="_blank"
                      >Código <i className="fas fa-code"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="projects__info">
            <h3 className="tertiary-title">
              Tela de Login Mobile com Redes Sociais
            </h3>
            <p>
              Tela de login mobile desenvolvida com responsividade pelas media queries, ícones de mídias sociais ativos e formulário de login.
              Aplicados técnicas de responsividade em diferentes dispositivos.
            </p>
          </div>
        </li>
        <li className="projects__reversed-list">
          <section className="trabalhos" id="trabalhos">
            <div className="caixa-conteudo">
              <div className="caixa tilt">
                <img src="/images/FormCadastro.png" alt="" />
                <div className="conteudo">
                  <div className="tag">
                    <h3>Formulário de Cadastro</h3>
                  </div>
                  <div className="desc">
                    <p>Conheça o código pelo repositório do GitHub</p>
                    <div className="btns">
                      <a href="#" className="btn" target="_blank"
                      >Código <i className="fas fa-code"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="projects__info">
            <h3 className="tertiary-title">
              Formulário de Cadastro
            </h3>
            <p>
              Formulário criado com HTML e CSS para treinar, pesquisar e desempenhar alinhamento, tags semânticas, conceitos iniciais de Front End.
            </p>
          </div>
        </li>
        <li>
          <section className="trabalhos" id="trabalhos">
            <div className="caixa-conteudo">
              <div className="caixa tilt">
                <img src="/images/HoradoDia.png" alt="" />
                <div className="conteudo">
                  <div className="tag">
                    <h3>Horário do Dia</h3>
                  </div>
                  <div className="desc">
                    <p>Conheça o código pelo repositório do GitHub</p>
                    <div className="btns">
                      <a href="#" className="btn" target="_blank"
                      >Código <i className="fas fa-code"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="projects__info">
            <h3 className="tertiary-title">
              Horário do Dia
            </h3>
            <p>
              Projeto criado com base em HTML, CSS e JavaScript trabalhando interação com funções, DOM. Interação com o sistema operacional do windows, podendo ser informado um horário manual.
            </p>
          </div>
        </li>
        <li className="projects__reversed-list">
          <section className="trabalhos" id="trabalhos">
            <div className="caixa-conteudo">
              <div className="caixa tilt">
                <img src="/images/FeiraFrutas.png" alt="" />
                <div className="conteudo">
                  <div className="tag">
                    <h3>Feira de Frutas</h3>
                  </div>
                  <div className="desc">
                    <p>Conheça o código pelo repositório do GitHub</p>
                    <div className="btns">
                      <a href="#" className="btn" target="_blank"
                      >Código <i className="fas fa-code"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="projects__info">
            <h3 className="tertiary-title">
              Cards com Feira de Frutas
            </h3>
            <p>
              Feira livre para compras de frutas trabalhando com inputs do HTML, responsividade do CSS e tratativa de lógica com valores de inputs, atributos, template strings e manipulando o DOM pelo JavaScript. A estrutura de botões são responsivos e mantém suas funcionalidades em diversos dispositivos.
            </p>
          </div>
        </li>
        <li>
          <section className="trabalhos" id="trabalhos">
            <div className="caixa-conteudo">
              <div className="caixa tilt">
                <img src="/images/controleFinanceiro.jpg" alt="" />
                <div className="conteudo">
                  <div className="tag">
                    <h3>Controle Financeiro</h3>
                  </div>
                  <div className="desc">
                    <p>Conheça o código pelo repositório do GitHub</p>
                    <div className="btns">
                      <a href="#" className="btn" target="_blank"
                      >Código <i className="fas fa-code"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="projects__info">
            <h3 className="tertiary-title">
              Controle Financeiro
            </h3>
            <p>
              Foi criado um Controle Financeiro, onde adiciona as transações no DOM, executa o preenchimento das informações do estado da aplicação quando a pagina for carregada, atualiza o valor das transações na tela (Saldo, Receitas e Despesas), armazenamento e adição das Transações Realizadas no Local Storage, remoção de Transações e execução dos eventos no formulário.
            </p>
          </div>
        </li>
      </ul>

      <p className="texto" >  <span className="citacao"></span></p>

    </section>
  </>

const Footer = () =>
  <>
    <footer id="footer">
      <div className="footer__content">
        <h2 className="tertiary-title mb-s">Vamos conversar?</h2>
        <p className="conversar mb-m">
          Ficarei feliz em saber mais sobre seus projetos e como podemos
          trabalhar juntos para torná-los realidade.
        </p>
        <section className="rodape">
          <div className="box-container">
            <div className="caixa">
              <h3>Portifólio Flávio Silva</h3>
              <p>
                Obrigado por Visitar meu Portifólio. <br />
                Visite-me nas redes sociais. <br />
                <br />
              </p>
            </div>

            <div className="caixa">
              <h3>Links Rápidos</h3>
              <a href="#header"
              ><i className="fas fa-chevron-circle-right"></i> Home</a
              >
              <a href="#about"
              ><i className="fas fa-chevron-circle-right"></i> Sobre</a
              >
              <a href="#skills"
              ><i className="fas fa-chevron-circle-right"></i> Habilidades</a
              >
              <a href="#projects"
              ><i className="fas fa-chevron-circle-right"></i> Projetos</a
              >
            </div>

            <div className="caixa">
              <h3>Informações para Contato</h3>
              <p><i className="fas fa-phone"></i>+55 (71) 99836-2020</p>
              <p><i className="fas fa-envelope"></i>fal_silva@hotmail.com</p>
              <div className="share">
                <a
                  href="https://www.linkedin.com/in/fl%C3%A1vio-silva-7080b848/"
                  className="fab fa-linkedin"
                  aria-label="LinkedIn"
                  target="_blank" rel="noopener noreferrer"
                ></a>
                <a
                  href="https://github.com/flavio16silva"
                  className="fab fa-github"
                  aria-label="GitHub"
                  target="_blank" rel="noopener noreferrer"
                ></a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Direitos Reservados --> */}
        <p className="footer__copyright">
          © 2026 Flávio Silva. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  </>
const App = () => {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* INICIO */}
      <Inicio />

      {/* SOBRE */}
      <About />

      {/* HABILIDADES */}
      <Habilidades />

      {/* PROJETOS */}
      <Projetos />

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export { App }
