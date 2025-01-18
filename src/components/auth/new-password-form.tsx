"use client"

import { CardWrapper } from "@/components/auth/card-wrapper"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { NewPasswordSchema } from "@/schemas"
import { useState, useTransition } from "react"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import { newPassword } from "@/actions/new-password"

export const NewPasswordForm = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  })

  const onSubmit = (value: z.infer<typeof NewPasswordSchema>) => {
    setError("")
    setSuccess("")

    startTransition(() => {
      newPassword(value, token).then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }
  return (
    <CardWrapper
      headerLabel="Enter a new password"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            className="w-full font-semibold"
            disabled={isPending}
          >
            Reset password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
