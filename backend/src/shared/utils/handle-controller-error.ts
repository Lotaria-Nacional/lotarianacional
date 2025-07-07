import { ZodError } from "zod";
import { HttpResponse } from "../../core/infrastucture/http/controller";
import { logger } from "../../main/config/logger";

export function handleControllerError(error: unknown): HttpResponse {
  if (error instanceof ZodError) {
    return {
      statusCode: 400,
      body: {
        message: error.errors[0].message,
      },
    };
  }

  if (error instanceof Error) {
    return {
      statusCode: 500,
      body: { message: error.message },
    };
  }

  logger.error("Unhandled Error: " + JSON.stringify(error));

  return {
    statusCode: 500,
    body: { message: "Erro interno no servidor" },
  };
}
