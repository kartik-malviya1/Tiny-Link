import { NewPasswordForm } from "@/components/auth/new-password-form"
import { Suspense } from "react"

const NewPassword = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewPasswordForm />
    </Suspense>
  )
}

export default NewPassword
