import { useState } from "react"


const splitName = (fullName) => {
  const parts = fullName.split(" ")

  return {
    firstLine: parts.slice(0, 2).join(" "),
    secondLine: parts.slice(2).join(" ")
  }
}

const splitLetters = (text) => text.split("")

const Home = () => {
  const [currentPage, setCurrentPage] = useState("inicio")

  const name = splitName("FLÁVIO LEITE DA SILVA")
  const containerClass = "max-w-7xl mx-auto px-12 md:px-24 lg:px-32"

  return (
    <header
      id="header" className="relative min-h-screen bg-cover bg-top bg-[50_30%]" style={{ backgroundImage: "url('/images/bg-home1.jpg')" }} >

      {/* NAVBAR */}
      <nav className="absolute top-8 left-0 right-0 z-50 ">
        <div className={containerClass}>
          <div className="flex items-center h-16">
            <ul className="flex w-full justify-between text-center md:w-auto md:justify-start md:space-x-12">
              {["inicio", "sobre", "projetos"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setCurrentPage(item)}
                    className={`uppercase text-sm  lg:text-lg tracking-widest transition-colors
                      ${currentPage === item ? "text-emerald-400" : "text-white "}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className={`flex flex-col justify-center min-h-screen pt-24 ${containerClass}`} >
        <h1 className="mb-10 leading-none w-full flex flex-col items-center text-center sm:items-start sm:text-left">
          {/* PRIMEIRO NOME */}
          <span className={`block text-3xl sm:text-4x1 md:text-6xl lg:text-7xl font-bold
           text-emerald-400 duration-700 ease-out 
           `}
          > {name.firstLine} </span>

          {/* SEGUNDO NOME */}
          <span
            className={`mt-4 text-base md:text-xl lg:text-2xl font-semibold uppercase text-emerald-400 
            tracking-[0.7em] md:tracking-[2.0em] lg:tracking-[2.0em] pl-1 sm:pl-2 md:pl-2 lg:pl-2 duration-700 ease-out
            sm:-translate-x-[0.35em]
            md:-translate-x-[0.2em]
            lg:-translate-x-[0.2em]
            `}
          >
            <>
              <span className="inline-flex translate-x-[0.22em] sm:translate-x-0">
                {splitLetters("DA").map((letter, index) => (
                  <span key={`da-${index}`}>{letter}</span>
                ))}
              </span>

              <span className="mx-6 opacity-50" />

              <span className="inline-flex translate-x-[0.5em] sm:translate-x-0 md:pl-0 pl-[0.3em]">
                {splitLetters("SILVA").map((letter, index) => (
                  <span key={`silva-${index}`}>{letter}</span>
                ))}
              </span>
            </>
          </span>
        </h1>


        {/* SUBTÍTULO */}
        <div className="
        flex 
        flex-wrap 
        items-center 
        gap-4 
        text-emerald-400 
        uppercase 
        text-center 
        md:text-center 
        tracking-wider
        ">
          <span className="
              block
              w-full
              text-center
              sm:w-auto
              sm:inline-flex
              ">
            Desenvolvedor Front-end</span>
          <span className="hidden sm:inline opacity-70 font-extrabold ">|</span>
          <span className="
                block
                w-full
                text-center
                sm:w-auto
                sm:inline-flex
                ">
            Estudante de Desenvolvimento Web Full Stack</span>
        </div>
      </div>
    </header >
  )
}


export { Home }
