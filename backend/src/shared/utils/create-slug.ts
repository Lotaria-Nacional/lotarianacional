export function createSlug(value: string): string {
    return value
      .normalize("NFD") // separa letras de acentos
      .replace(/[\u0300-\u036f]/g, "") // remove acentos
      .replace(/[^a-zA-Z0-9\s-]/g, "") // remove símbolos e pontuação
      .trim() // remove espaços nas pontas
      .toLowerCase() // transforma em minúsculas
      .replace(/[\s_-]+/g, "-") // substitui espaços e underscores por hífens
      .replace(/^-+|-+$/g, ""); // remove hífens no início ou fim
  }
  