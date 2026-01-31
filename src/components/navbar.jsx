import { NavLink } from "react-router-dom"

const Navbar = () => {
  const containerClass = "max-w-7xl mx-auto px-12 md:px-24 lg:px-32"

  const navItems = [
    { path: "/", label: "inicio" },
    { path: "/sobre", label: "sobre" },
    { path: "/projetos", label: "projetos" }
  ]

  return (
    <nav className="absolute top-8 left-0 right-0 z-50 ">
      <div className={containerClass}>
        <div className="flex items-center h-16">
          <ul className="flex w-full justify-between text-center md:w-auto md:justify-start md:space-x-12">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `uppercase text-sm  lg:text-lg tracking-widest transition-colors
                      ${isActive ? "text-emerald-400" : "text-white "}`}

                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>

  )
}

export { Navbar }