"use server"

import { SignUpSchema } from "@/schemas";
import * as z from "zod"

export const signUp = async(values: z.infer<typeof SignUpSchema>) =>{

  const validateFields = SignUpSchema.safeParse(values)

  if(!validateFields.success){
    return { error: "Invalid fields"}
  }

  return { success: " Email sent!"}
}