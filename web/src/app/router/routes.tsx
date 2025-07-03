import {
  NewsPage,
  HomePage,
  AboutPage,
  ErrorPage,
  TermsPage,
  AgencyPage,
  GameGuidePage,
  StatisticsPage,
  JobApplicationPage,
  NewsDetailsPage,
  DailyLotteryResultPage,
  RegulamentationPage,
  OddsPrizesPage,
  PoliticsAndPrivacyPage,
  JobOppeningDetailsPage,
  ResellerJobOppeningsPage,
  SkilledStaffJobOppeningsPage,
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

      {
        path: "/recrutamento",
        element: <JobApplicationPage />,
        children: [
          {
            path: "revendedores",
            element: <ResellerJobOppeningsPage />,
          },
          {
            path: "quadros",
            element: <SkilledStaffJobOppeningsPage />,
          },
        ],
      },
      {
        path: "/recrutamento/vaga/:id/detalhes",
        element: <JobOppeningDetailsPage />,
      },

      //Game
      { path: "/como-jogar", element: <GameGuidePage /> },
      { path: "/resultados", element: <DailyLotteryResultPage /> },
      { path: "/estatisticas", element: <StatisticsPage /> },
      { path: "/chances-e-premios/", element: <OddsPrizesPage /> },

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
