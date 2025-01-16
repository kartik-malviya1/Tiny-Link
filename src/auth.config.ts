import type { NextAuthConfig } from "next-auth"
import { getUserByEmail } from "@/data/user"
import { LoginSchema } from "@/schemas"
import Credential from "next-auth/providers/credentials"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import bcrypt from "bcryptjs"

export default { 
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credential({
    async authorize(credentials){
      const validatedFields = LoginSchema.safeParse(credentials)

      if (validatedFields.success) {
        const { email, password} = validatedFields.data

        const user = await getUserByEmail(email)
        if (!user || !user.password) return null;

        const passwordMatched = await bcrypt.compare(
          password,
          user.password
        );

        if (passwordMatched) return user;
      }
      return null
    }
  })], 
} satisfies NextAuthConfig