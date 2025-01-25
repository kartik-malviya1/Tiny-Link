import { SignUpForm } from "@/components/auth/sign-up-form"
import { Suspense } from "react"

const SignUpPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SignUpForm />
      </Suspense>
    </div>
  )
}

export default SignUpPage
