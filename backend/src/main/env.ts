import z from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  SENDGRID_API_KEY: z.string(),
  JWT_SECRET: z.string(),
  PORT: z.string().optional(),
  CLOUD_NAME: z.string(),
  CLOUD_API_KEY: z.string(),
  CLOUD_SECRET: z.string(),
});
