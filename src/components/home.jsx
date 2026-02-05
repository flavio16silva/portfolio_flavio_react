const Home = () => {
  const containerClass = "max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-32"
  return (
    <header
      id="header"
      className="relative min-h-screen bg-cover bg-top bg-[50_30%]"
      style={{ backgroundImage: "url('/images/bg-home2.jpg')" }} >

      {/* HERO */}
      <div className={`flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen ${containerClass}`} >
        {/* TEXTO */}
        <div className="lg:w-3/5 flex flex-col justify-center mb-6 sm:mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-emerald-400 ease-out text-center lg:text-left"> FLÁVIO SILVA </h1>

          {/* SUBTÍTULO */}
          <div className="flex flex-wrap items-center gap-4 text-emerald-400 uppercase tracking-wider justify-center lg:justify-start mt-4 sm:mt-6 ">
            <span className=" block w-full text-center lg:w-auto lg:inline-flex ">
              Desenvolvedor Front-end</span>
            <span className=" block w-full text-center lg:w-auto lg:inline-flex ">
              Estudante de Desenvolvimento Web Full Stack</span>
          </div>
        </div>

        {/* FOTO */}
        <div className="lg:w-2/5 flex justify-center lg:justify-end
        mt-6 sm:mt-8 lg:mt-0">
          <img
            src="/images/fotoEu.jpg"
            alt="Flavio Silva"
            className="w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96 
                     h-auto object-cover rounded-xl shadow-[0_0_30px_10px_rgba(255,255,255,0.2)]
                     transform hover:scale-105 transition duration-300"
            style={{ maxHeight: '420px', objectPosition: 'center top' }} />
        </div>
      </div>
    </header >
  )
}

export { Home }