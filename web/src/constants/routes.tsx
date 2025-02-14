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
import ErrorPage from "@/pages/error-page"
import TermsPage from "@/pages/terms-page"
import { createBrowserRouter } from "react-router-dom"
import ChancesEPremiosPage from "@/pages/chances-e-prémios"
import NoticiaSinglePage from "../pages/noticia-single-page"
import RegulamentationPage from "@/pages/regulamentation-page"
import PoliticsAndPrivacyPage from "@/pages/politics-and-privacy-page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
      {
        path: "/chances-e-premios/",
        element: <ChancesEPremiosPage />,
      },

      {
        path: "/termos-e-condicoes-gerais",
        element: <TermsPage />,
      },
      {
        path: "/termos-de-privacidade",
        element: <PoliticsAndPrivacyPage />,
      },
      {
        path: "/regulamentos-do-loto-5/90",
        element: <RegulamentationPage />,
      },
    ],
  },
])
