import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import AboutMePage from './pages/AboutMePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ExperiencePage from './pages/ExperiencePage.jsx'

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/AboutMe", element: <AboutMePage />},
  {path: "/Projects", element: <ProjectsPage />},
  {path: "/Experiences", element: <ExperiencePage />},
  {path: "*", element: <HomePage />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
