import { useState } from "react"


const splitName = (fullName) => {
  const parts = fullName.split(" ")

  return {
    firstLine: parts.slice(0, 2).join(" "),
    secondLine: parts.slice(2).join(" ")
  }
}

const splitLetters = (text) => text.split("")

const Header = () => {
  const [currentPage, setCurrentPage] = useState("inicio")

  const name = splitName("FLÁVIO LEITE DA SILVA")
  const containerClass = "max-w-7xl mx-auto px-12 md:px-24 lg:px-32"

  return (
    <header
      id="header" className="w-full min-h-screen bg-black bg-linear-to-br from-[#051b1a] via-black to-[#02110f]" >

      {/* NAVBAR */}
      <nav className="fixed top-8 left-0 right-0 z-50 ">
        <div className={containerClass}>
          <div className="flex items-center h-16">
            <ul className="flex w-full justify-between text-center md:w-auto md:justify-start md:space-x-12">
              {["inicio", "sobre", "projetos"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setCurrentPage(item)}
                    className={`uppercase text-sm md:text-base lg:text-lg tracking-widest transition-colors
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
        <h1 className="mb-10 leading-none max-w-fit">
          {/* PRIMEIRO NOME */}
          <span className={`block text-5xl md:text-7xl lg:text-8xl font-bold
           text-emerald-400 duration-700 ease-out 
           `}
          > {name.firstLine} </span>

          {/* SEGUNDO NOME */}
          <span
            className={`mt-4 text-base md:text-xl lg:text-2xl font-semibold uppercase text-emerald-400 tracking-[2.6em]
              pl-4 md:pl-2 lg:pl-2
             duration-700 ease-out
              `}
          >
            <>
              {splitLetters("DA").map((letter, index) => (
                <span key={`da-${index}`}>{letter}</span>
              ))}

              <span className="mx-6 opacity-50" />

              {splitLetters("SILVA").map((letter, index) => (
                <span key={`silva-${index}`}>{letter}</span>
              ))}
            </>
          </span>
        </h1>


        {/* SUBTÍTULO */}
        <div className="flex flex-wrap items-center gap-4 text-emerald-400 uppercase text-sm md:text-base tracking-wider">
          <span>Desenvolvedor Front-end</span>
          <span className="opacity-50 font-extrabold ">|</span>
          <span>Estudante de Desenvolvimento Web Full Stack</span>
        </div>
      </div>
    </header >
  )
}


export { Header }
