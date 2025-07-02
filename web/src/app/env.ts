import { z } from "zod"

const envSchema = z.object({
  VITE_APP_API_URL: z.string().nonempty(),
  VITE_APP_API_GOOGLE_MAP_ID: z.string().nonempty(),
  VITE_APP_API_GOOGLE_MAP_API: z.string().nonempty(),
})

export const parsed = envSchema.safeParse(import.meta.env)

if (!parsed.success) {
  console.error("Missing environment variables")
  throw new Error("Missing environment variables")
}

export const env = {
  VITE_APP_API_URL: parsed.data.VITE_APP_API_URL,
  VITE_APP_API_GOOGLE_MAP_ID: parsed.data.VITE_APP_API_GOOGLE_MAP_ID,
  VITE_APP_API_GOOGLE_MAP_API: parsed.data.VITE_APP_API_GOOGLE_MAP_API,
}
