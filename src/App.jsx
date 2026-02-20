import { Home } from "./components/home"
import { About } from "./components/about"
import { Navbar } from "./components/navbar"
import { Projects } from "./components/projects"
import { Formacao } from "./components/formacao"
import { Resumo } from "./components/resumo"
import { Contato } from "./components/contato"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet
} from "react-router-dom"


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
        <Route path="/formacao" element={<Formacao />} />
        <Route path="/resumo" element={<Resumo />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )

}

export { App }
