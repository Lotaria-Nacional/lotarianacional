import {
  HomePage,
  JogarPage,
  AgenciasPage,
  NoticiasPage,
  SobreNosPage,
  ComoJogarPage,
  ResultadosPage,
  RecrutamentoPage,
  EstatisticasPage,
} from "../pages/index"

import App from "../App"
import { createBrowserRouter } from "react-router-dom"
import NoticiaSinglePage from "../pages/noticia-single-page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/sobre-nos",
        element: <SobreNosPage />,
      },
      {
        path: "/como-jogar",
        element: <ComoJogarPage />,
      },
      {
        path: "/resultados",
        element: <ResultadosPage />,
      },
      {
        path: "/estatisticas",
        element: <EstatisticasPage />,
      },
      {
        path: "/agencias",
        element: <AgenciasPage />,
      },
      {
        path: "/noticias",
        element: <NoticiasPage />,
      },
      {
        path: "/recrutamento",
        element: <RecrutamentoPage />,
      },
      {
        path: "/jogar",
        element: <JogarPage />,
      },
      {
        path: "/noticia/:id",
        element: <NoticiaSinglePage />,
      },
    ],
  },
])
