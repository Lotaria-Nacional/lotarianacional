import z from 'zod'
import { logger } from './logger'

const envSchema = z.object({
    DATABASE_URL:z.string().min(1, "DATABASE_URL is missing"),
    CLOUD_NAME:z.string().min(1, "CLOUD_NAME is missing"),
    CLOUD_API_KEY:z.string().min(1, "CLOUD_API_KEY is missing"),
    CLOUD_SECRET:z.string().min(1, "CLOUD_SECRET is missing"),
    JWT_SECRET:z.string().min(1, "JWT_SECRET is missing"),
    RESEND_API_KEY:z.string().min(1, "RESEND_API_KEY is missing"),
    SENDGRID_API_KEY:z.string().min(1, "SENDGRID_API_KEY is missing"),
    NODE_ENV:z.string().default('development'),
    PORT:z.coerce.number().default(3333),
})

const parsed = envSchema.safeParse(process.env)

if(!parsed.success){
    logger.error("Missing env variable: " + parsed.error.errors[0].path)
    process.exit(1)
}

const { CLOUD_API_KEY,CLOUD_NAME,CLOUD_SECRET,DATABASE_URL,JWT_SECRET,NODE_ENV,PORT,RESEND_API_KEY,SENDGRID_API_KEY } = parsed.data

export const env = {
    DATABASE_URL,
    CLOUD_NAME,
    CLOUD_API_KEY,
    CLOUD_SECRET,
    JWT_SECRET,
    RESEND_API_KEY,
    SENDGRID_API_KEY,
    NODE_ENV,
    PORT 
}