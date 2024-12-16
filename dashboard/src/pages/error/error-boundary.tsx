import React, { Component, ReactNode } from "react"

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Atualiza o estado para renderizar a UI de fallback
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Você pode logar o erro aqui ou enviar para um serviço como Sentry
    console.error("Erro capturado pelo Error Boundary:", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-GRAY-100">
          <h1 className="text-4xl font-bold text-RED-200">Ocorreu um erro</h1>
          <p className="text-lg text-gray-600">
            Por favor, tente novamente mais tarde.
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
