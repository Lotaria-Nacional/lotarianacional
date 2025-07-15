import {
  NewsPage,
  LoginPage,
  PageError,
  UsersPage,
  Dashboard,
  AddNewsPage,
  BannerPage,
  AgenciesPage,
  PageNotFound,
  SettingsPage,
  AllResultsPage,
  UpdateNewsPage,
  AddResultsPage,
  JobOppeningPage,
  ForgotPasswordPage,
  DownloadResultsPage,
  QualifiedOppeningPage,
  PartnerPage,
} from "@/pages"
import App from "../../App"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <LoginPage />,
        errorElement: <PageError />,
      },
      {
        path: "recuperar-palavra-passse",
        element: <ForgotPasswordPage />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/resultados/adicionar",
        element: <AddResultsPage />,
      },
      {
        path: "/resultados/baixar",
        element: <DownloadResultsPage />,
      },
      {
        path: "/resultados/todos",
        element: <AllResultsPage />,
      },
      {
        path: "/banners",
        element: <BannerPage />,
      },
      {
        path: "/agencias",
        element: <AgenciesPage />,
      },
      {
        path: "/noticias",
        element: <NewsPage />,
      },
      {
        path: "/noticias/adicionar",
        element: <AddNewsPage />,
      },
      {
        path: "/noticias/atualizar/:id",
        element: <UpdateNewsPage />,
      },
      {
        path: "/usuarios",
        element: <UsersPage />,
      },
      {
        path: "/configuracoes",
        element: <SettingsPage />,
      },
      {
        path: "/carreiras",
        element: <JobOppeningPage />,
        children: [
          {
            path: "quadros",
            element: <QualifiedOppeningPage />,
          },
          {
            path: "parceiros",
            element: <PartnerPage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
])
