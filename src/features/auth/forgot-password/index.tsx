import { Link } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'
import AuthLayout from '../auth-layout'
import { ForgotForm } from './components/forgot-password-form'

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <Card className="p-6">
        <div className="mb-2 flex flex-col space-y-2 text-left">
          <h1 className="font-semibold text-md tracking-tight">
            Forgot Password
          </h1>
          <p className="text-muted-foreground text-sm">
            Enter your registered email and <br /> we will send you a link to
            reset your password.
          </p>
        </div>
        <ForgotForm />
        <p className="mt-4 px-8 text-center text-muted-foreground text-sm">
          Don't have an account?{' '}
          <Link
            to="/sign-up"
            className="underline underline-offset-4 hover:text-primary"
          >
            Sign up
          </Link>
          .
        </p>
      </Card>
    </AuthLayout>
  )
}
