import { Card } from '@/components/ui/card'
import AuthLayout from '../auth-layout'
import { UserAuthForm } from './components/user-auth-form'

export default function SignIn() {
  return (
    <AuthLayout>
      <Card className="p-6">
        <div className="flex flex-col space-y-2 text-left">
          <h1 className="font-semibold text-2xl tracking-tight">Login</h1>
          <p className="text-muted-foreground text-sm">
            Enter your email and password below <br />
            to log into your account
          </p>
        </div>
        <UserAuthForm />
        <p className="mt-4 px-8 text-center text-muted-foreground text-sm">
          By clicking login, you agree to our{' '}
          <a
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </a>
          .
        </p>
      </Card>
    </AuthLayout>
  )
}
