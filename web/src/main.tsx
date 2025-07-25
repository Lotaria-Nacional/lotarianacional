import { StrictMode } from "react";
import { queryClient } from "./lib/tanstack";
import { router } from "./app/router/routes";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ModalContextProvider } from "./app/context/modal-provider";

import "./shared/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <RouterProvider router={router} />
        <ToastContainer
          autoClose={3000}
          hideProgressBar={true}
          position="bottom-right"
        />
      </ModalContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
