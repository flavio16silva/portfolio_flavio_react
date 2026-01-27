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

export { Footer }