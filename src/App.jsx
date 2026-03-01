import { Home } from "./components/home"
import { About } from "./components/about"
import { Navbar } from "./components/navbar"
import { Projects } from "./components/projects"
import { Formacao } from "./components/formacao"
import { Resumo } from "./components/resumo"
import { Contato } from "./components/contato"
import Galaxy from "./components/galaxy"
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
      <Galaxy
        mouseRepulsion={false}
        mouseInteraction={false}
        density={0.3}
        glowIntensity={0.3}
        saturation={0}
        hueShift={140}
        twinkleIntensity={0.3}
        rotationSpeed={0.1}
        repulsionStrength={2}
        autoCenterRepulsion={0}
        starSpeed={0.5}
        speed={1.2}
      />
      <Navbar />
      <Outlet />
    </>
  )
}



const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
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
