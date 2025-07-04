import z from "zod";
import { logger } from "./logger";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1, "DATABASE_URL is missing"),
  JWT_SECRET: z.string().min(1, "JWT_SECRET is missing"),
  SENDGRID_API_KEY: z.string().min(1, "SENDGRID_API_KEY is missing"),
  NODE_ENV: z.string().default("development"),
  PORT: z.coerce.number().default(3333),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  logger.error("Missing env variable: " + parsed.error.errors[0].path);
  process.exit(1);
}

const { DATABASE_URL, JWT_SECRET, NODE_ENV, PORT, SENDGRID_API_KEY } = parsed.data;

export const env = {
  DATABASE_URL,
  JWT_SECRET,
  SENDGRID_API_KEY,
  NODE_ENV,
  PORT,
};
