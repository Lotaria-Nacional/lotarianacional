import App from "../App"
import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"

const Dashboard = lazy(() => import("../pages/protected/dashboard"))
const BannerPage = lazy(() => import("@/pages/protected/banner-page"))
const LoginPage = lazy(() => import("../pages/auth/login-page/login-page"))
const AddResultsPage = lazy(() => import("@/pages/protected/add-results-page"))
const DownloadResultsPage = lazy(
  () => import("@/pages/protected/download-results-page")
)
const ForgotPasswordPage = lazy(
  () => import("../pages/auth/login-page/forgot-password-page")
)
const AgenciesPage = lazy(() => import("@/pages/protected/agencies-page"))
const NewsPage = lazy(() => import("@/pages/protected/news/news-page"))
const UsersPage = lazy(() => import("@/pages/protected/users-page"))
const GuidePage = lazy(() => import("@/pages/protected/guide-page"))
const SettingsPage = lazy(() => import("@/pages/protected/settings-page"))
const AddNewsPage = lazy(() => import("@/pages/protected/news/add-news-page"))
const AllResultsPage = lazy(() => import("@/pages/protected/all-results-page"))
const UpdateNewsPage = lazy(
  () => import("@/pages/protected/news/update-news-page")
)
const PageNotFound = lazy(() => import("@/pages/error/page-not-found"))
const PageError = lazy(() => import("@/pages/error/page-error"))

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
        path: "/guia",
        element: <GuidePage />,
      },
    ],
    errorElement: <PageError />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
])
