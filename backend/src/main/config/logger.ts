import  pino from 'pino'
import { env } from './env'

const isDev = env.NODE_ENV !== 'production'

export const logger = pino({
    level:'debug',
    transport: isDev ? {
        target:'pino-pretty',
        options: {
            colorize:true,
            translateTime:'SYS:standard',
            ignore:'pid,hostname'
        }
    } : undefined,
})