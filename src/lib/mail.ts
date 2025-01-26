import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const baseUrl =
  process.env.NEXTAUTH_URL || process.env.VERCEL_URL || "http://localhost:3000"

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${baseUrl}/auth/new-password?token=${token}`

  await resend.emails.send({
    from: "mail@tiny-link.kartikmalviya.tech",
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  })
}

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${baseUrl}/auth/new-verification?token=${token}`

  await resend.emails.send({
    from: "mail@tiny-link.kartikmalviya.tech",
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  })
}
