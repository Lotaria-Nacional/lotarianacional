import RootLayout from "./root-layout"

import NewsPage from "./pages/dashboard/news-page"
import GuidePage from "./pages/dashboard/guide-page"
import BannersPage from "./pages/dashboard/banners-page"
import AddNewsPage from "./pages/dashboard/add-news-page"
import AgenciesPage from "./pages/dashboard/agencies-page"
import EditNewsPage from "@/pages/dashboard/edit-news-page"
import DashboardPage from "./pages/dashboard/dashboard-page"
import AddAgencyPage from "./pages/dashboard/add-agency-page"
import EditAgencyPage from "@/pages/dashboard/edit-agency-page"
import AddResultsPage from "./pages/dashboard/add-results-page"
import EditResultsPage from "@/pages/dashboard/edit-results-page"
import SettingsPage from "./pages/dashboard/settings/settings-page"
import DownloadTicketPage from "./pages/dashboard/download-ticket-page"

import { createBrowserRouter } from "react-router-dom"
import LoginPage from "./pages/auth/login-page"
import UsersPage from "./pages/dashboard/users-page"
import NotFoundPage from "./pages/error/404-not-found-page"
import EmissionsPage from "./pages/dashboard/emissions-page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      { index: true, element: <DashboardPage /> },
      { path: "guia", element: <GuidePage /> },
      { path: "noticias", element: <NewsPage /> },
      { path: "banners", element: <BannersPage /> },
      { path: "agencias", element: <AgenciesPage /> },
      { path: "configuracoes", element: <SettingsPage /> },
      { path: "adicionar-noticia", element: <AddNewsPage /> },
      { path: "noticia/:id", element: <EditNewsPage /> },
      { path: "adicionar-agencia", element: <AddAgencyPage /> },
      { path: "agencia/:id", element: <EditAgencyPage /> },
      { path: "baixar-ticket", element: <DownloadTicketPage /> },
      { path: "editar-resultados", element: <EditResultsPage /> },
      { path: "adicionar-resultados", element: <AddResultsPage /> },
      { path: "usuarios", element: <UsersPage /> },
      { path: "emissoes", element: <EmissionsPage /> },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])
