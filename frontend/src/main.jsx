import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import AboutMePage from './pages/AboutMePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ExperiencePage from './pages/ExperiencePage.jsx'
import NotFoundPage from './components/NotFound/NotFoundPage.jsx'

const router = createBrowserRouter([
  {path: "/RileyTatePortfolio/", element: <HomePage />},
  {path: "/RileyTatePortfolio/AboutMe", element: <AboutMePage />},
  {path: "/RileyTatePortfolio/Projects", element: <ProjectsPage />},
  {path: "/RileyTatePortfolio/Experiences", element: <ExperiencePage />},
  {path: "*", element: <NotFoundPage />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
