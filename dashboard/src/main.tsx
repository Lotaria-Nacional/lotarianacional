import { StrictMode, Suspense } from "react";
import { queryClient } from "./lib/tanstack";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "./app/context/auth-context";

import "./index.css";
import PageFallback from "./app/router/page-fallback";
import { router } from "./app/router";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Suspense fallback={<PageFallback />}>
          <RouterProvider router={router} />
        </Suspense>
        <Toaster className="bg-green-700" />
      </AuthContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
