import { lazy } from "react"

export const Dashboard = lazy(() => import("../pages/protected/dashboard"))
export const BannerPage = lazy(() => import("@/pages/protected/banner-page"))
export const LoginPage = lazy(
  () => import("../pages/auth/login-page/login-page")
)
export const AddResultsPage = lazy(
  () => import("@/pages/protected/add-results-page")
)
export const DownloadResultsPage = lazy(
  () => import("@/pages/protected/download-results-page")
)
export const ForgotPasswordPage = lazy(
  () => import("../pages/auth/login-page/forgot-password-page")
)
export const AgenciesPage = lazy(
  () => import("@/pages/protected/agencies-page")
)
export const NewsPage = lazy(() => import("@/pages/protected/news/news-page"))
export const UsersPage = lazy(() => import("@/pages/protected/users-page"))
export const GuidePage = lazy(() => import("@/pages/protected/guide-page"))
export const SettingsPage = lazy(
  () => import("@/pages/protected/settings-page")
)
export const AddNewsPage = lazy(
  () => import("@/pages/protected/news/add-news-page")
)
export const AllResultsPage = lazy(
  () => import("@/pages/protected/all-results-page")
)
export const UpdateNewsPage = lazy(
  () => import("@/pages/protected/news/update-news-page")
)
export const PageNotFound = lazy(() => import("@/pages/error/page-not-found"))
export const PageError = lazy(() => import("@/pages/error/page-error"))
export const JobOppeningPage = lazy(
  () => import("@/features/job-oppenings/pages/job-oppening-page")
)
export const QualifiedOppeningPage = lazy(
  () => import("@/features/job-oppenings/pages/qualified-oppening-page")
)
export const PartnerPage = lazy(
  () => import("@/features/job-oppenings/pages/partner-oppening-page")
)
