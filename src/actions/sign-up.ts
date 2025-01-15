"use server"

import db from "@/lib/db"
import { SignUpSchema } from "@/schemas";
import * as z from "zod"
import bcrypt from "bcryptjs"
import { getUserByEmail } from "@/data/user";

export const signUp = async(values: z.infer<typeof SignUpSchema>) =>{

  const validateFields = SignUpSchema.safeParse(values)

  if(!validateFields.success){
    return { error: "Invalid fields"}
  }

  const {name, email, password,} = validateFields.data
  const hashPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return {error: "Email already in use!"}
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });

// TODO Sent Verification Token Email

  return { success: "User created!"} 
}