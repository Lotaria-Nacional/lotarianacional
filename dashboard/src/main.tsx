import { router } from "./routes"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ToastContainer } from "react-toastify"
import { RouterProvider } from "react-router-dom"
import AuthContextProvider from "./context/authContext"

import "./index.css"
import "react-toastify/dist/ReactToastify.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
      <ToastContainer autoClose={2000} position="bottom-right" />
    </AuthContextProvider>
  </StrictMode>
)
