import { router } from "./router"
import { StrictMode, Suspense } from "react"
import { queryClient } from "./lib/tanstack"
import { createRoot } from "react-dom/client"
import { Toaster } from "./components/ui/sonner"
import { RouterProvider } from "react-router-dom"
import PageFallback from "./router/page-fallback"
import { QueryClientProvider } from "@tanstack/react-query"
import AuthContextProvider from "./context/auth-context"

import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<PageFallback />}>
          <RouterProvider router={router} />
        </Suspense>
        <Toaster />
      </QueryClientProvider>
    </AuthContextProvider>
  </StrictMode>
)
