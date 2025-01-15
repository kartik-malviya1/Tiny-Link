import type { NextAuthConfig } from "next-auth"
import Credential from "next-auth/providers/credentials"
import { LoginSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"

export default { 
  providers: [Credential({
    async authorize(credentials){
      const validatedFields = LoginSchema.safeParse(credentials)

      if (validatedFields.success) {
        const { email, password} = validatedFields.data

        const user = await getUserByEmail(email)
      }
    }
  })], 
} satisfies NextAuthConfig