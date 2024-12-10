import RootLayout from "../root-layout"
import NewsPage from "../pages/dashboard/news-page"
import GuidePage from "../pages/dashboard/guide-page"
import BannersPage from "../pages/dashboard/banners-page"
import AgenciesPage from "../pages/dashboard/agencies-page"
import DashboardPage from "../pages/dashboard/dashboard-page"
import AddResultsPage from "../pages/dashboard/add-results-page"
import SettingsPage from "../pages/dashboard/settings/settings-page"
import DownloadTicketPage from "../pages/dashboard/download-ticket-page"

import { createBrowserRouter } from "react-router-dom"
import AddAgencyPage from "../pages/dashboard/add-agency-page"
import AddNewsPage from "../pages/dashboard/add-news-page"
import EditResultsPage from "@/pages/dashboard/edit-results-page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "guia", element: <GuidePage /> },
      { index: true, element: <DashboardPage /> },
      { path: "noticias", element: <NewsPage /> },
      { path: "banners", element: <BannersPage /> },
      { path: "agencias", element: <AgenciesPage /> },
      { path: "configuracoes", element: <SettingsPage /> },
      { path: "adicionar-noticia", element: <AddNewsPage /> },
      { path: "adicionar-agencia", element: <AddAgencyPage /> },
      { path: "baixar-ticket", element: <DownloadTicketPage /> },
      { path: "editar-resultados", element: <EditResultsPage /> },
      { path: "adicionar-resultados", element: <AddResultsPage /> },
    ],
  },
])
