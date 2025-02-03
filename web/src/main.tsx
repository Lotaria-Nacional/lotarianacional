import { StrictMode } from "react"
import { router } from "./constants/routes"
import { createRoot } from "react-dom/client"
import { ToastContainer } from "react-toastify"
import { RouterProvider } from "react-router-dom"
import { ModalContextProvider } from "./context/modal-provider"

import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalContextProvider>
      <RouterProvider router={router} />
      <ToastContainer
        autoClose={3000}
        hideProgressBar={true}
        position="bottom-right"
      />
    </ModalContextProvider>
  </StrictMode>
)
