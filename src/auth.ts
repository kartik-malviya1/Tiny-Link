import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { getUserById } from "./data/user"
import authConfig from "@/auth.config"
import db from "@/lib/db"

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      })
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email Verification
      if (account?.provider !== "credentials") return true

      const existingUser = await getUserById(user.id as string)

      // prevent signIn without email verification
      if (!existingUser?.emailVerified) {
        return false
      }
      return true
    },

    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }
      return session
    },
    async jwt({ token }) {
      return token
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})
