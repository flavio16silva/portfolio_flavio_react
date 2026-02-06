import { Home } from "./components/home"
import { About } from "./components/about"
import { Navbar } from "./components/navbar"
import { Projects } from "./components/projects"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet
} from "react-router-dom"




// const MediaSocial = () => (
//   <section>
//     <a
//       href="https://www.linkedin.com/in/fl%C3%A1vio-silva-7080b848/"
//       className="fab fa-linkedin"
//       aria-label="LinkedIn"
//       target="_blank" rel="noopener noreferrer"
//     ></a>
//     <a
//       href="https://github.com/flavio16silva"
//       className="fab fa-github"
//       aria-label="GitHub"
//       target="_blank" rel="noopener noreferrer"
//     ></a>
//     <a
//       href="mailto:fal_silva@hotmail.com"
//       className="fas fa-envelope"
//       aria-label="Email"
//       target="_blank" rel="noopener noreferrer"
//     ></a>
//   </section>
// )





const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}



const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )

}

export { App }
