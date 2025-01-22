import * as z from "zod"

export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "Minimun of 6 character required" }),
})
export const ResetSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
})

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
})

export const SignUpSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
  name: z.string().min(1, { message: "Name is required" }),
})

export const UrlSchema = z.object({
  originalUrl: z.string().url(),
  userId: z.string(),
  customUrl: z.string().optional().refine(
    (val) => !val || /^[a-zA-Z0-9-_]+$/.test(val),
    "Custom URL can only contain letters, numbers, hyphens, and underscores"
  ),
})
