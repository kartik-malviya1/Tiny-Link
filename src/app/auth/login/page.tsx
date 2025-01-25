import { LoginForm } from "@/components/auth/login-form"
import { Suspense } from "react"

const LoginPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  )
}

export default LoginPage
