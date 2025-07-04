import { ZodError } from "zod";
import { HttpResponse } from "../../core/infrastucture/http/controller";
import { logger } from "../../main/config/logger";

export function handleControllerError(error: unknown): HttpResponse {
  if (error instanceof Error) {
    return {
      statusCode: 500,
      body: { message: error.message },
    };
  }

  if (error instanceof ZodError) {
    return {
      body: {
        message: error.errors[0].message,
      },
      statusCode: 400,
    };
  }

  logger.error("Unhandle Error: " + error);

  return {
    body: { message: "Erro interno no servidor" },
    statusCode: 500,
  };
}
