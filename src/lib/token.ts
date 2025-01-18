import { v4 as uuidv4 } from "uuid"
import db from "@/lib/db"
import { getVerificationTokenByEmail } from "@/data/verification-token"
import { getPasswordResetTokenByEmail } from "@/data/password-reset-token"

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4()
  const expires = new Date(new Date().getTime() + 3000 * 1000)

  const exisitingToken = await getPasswordResetTokenByEmail(email)

  if (exisitingToken) {
    await db.passwordResetToken.delete({
      where: { id: exisitingToken.id },
    })
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  })
  return passwordResetToken
}

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4()
  const expires = new Date(new Date().getTime() + 3000 * 1000)

  const exisitingToken = await getVerificationTokenByEmail(email)

  if (exisitingToken) {
    await db.verificationToken.delete({
      where: {
        id: exisitingToken.id,
      },
    })
  }
  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  })
  return verificationToken
}
