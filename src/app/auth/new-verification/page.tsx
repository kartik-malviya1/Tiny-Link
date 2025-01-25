import { NewVerificationForm } from "@/components/auth/new-verification-form"
import { Suspense } from "react"

const NewVerificationPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <NewVerificationForm />
      </Suspense>
    </div>
  )
}

export default NewVerificationPage
