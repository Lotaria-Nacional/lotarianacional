import {
  NewsPage,
  HomePage,
  AboutPage,
  ErrorPage,
  TermsPage,
  AgencyPage,
  GameGuidePage,
  StatisticsPage,
  ApplicationPage,
  NewsDetailsPage,
  LotteryResultPage,
  RegulamentationPage,
  ChancesEPremiosPage,
  PoliticsAndPrivacyPage,
} from "@/pages";
import App from "@/App";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      //Initial Page
      { index: true, element: <HomePage /> },

      //Institutional
      { path: "/sobre-nos", element: <AboutPage /> },
      { path: "/agencias", element: <AgencyPage /> },
      { path: "/recrutamento", element: <ApplicationPage /> },

      //Game
      { path: "/como-jogar", element: <GameGuidePage /> },
      { path: "/resultados", element: <LotteryResultPage /> },
      { path: "/estatisticas", element: <StatisticsPage /> },
      { path: "/chances-e-premios/", element: <ChancesEPremiosPage /> },

      //News
      { path: "/noticias", element: <NewsPage /> },
      { path: "/noticia/:id", element: <NewsDetailsPage /> },

      //Legal
      { path: "/termos-e-condicoes-gerais", element: <TermsPage /> },
      { path: "/termos-de-privacidade", element: <PoliticsAndPrivacyPage /> },
      { path: "/regulamentos-do-loto-5-90", element: <RegulamentationPage /> },
    ],
  },
]);
