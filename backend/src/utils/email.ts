import path from "path"

export const resolveTemplatePath = (template: string): string =>
  path.join(__dirname, "../Infra/http/views", template)
