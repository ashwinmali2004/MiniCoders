
import SignInFormProvider from '@/components/forms/sign-in/form-provider'
import LoginForm from '@/components/forms/sign-in/login-form'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignInPage = () => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignInFormProvider>
          <div className="flex flex-col gap-3 ">
            <div className="flex flex-row justify-center">
              <div>
            <Image src="/images/login-i.png" height={300} width={300} alt="logo"/>
            </div>
            </div>
            <LoginForm />
            <div className="w-full flex flex-col gap-3 items-center">
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-purple-700 "
              >
                Submit
              </Button>
              <p>
                Don’t have an account?{' '}
                <Link
                  href="/auth/sign-up"
                  className="font-bold hover:text-blue-800"
                >
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </SignInFormProvider>
      </div>
    </div>
  )
}

export default SignInPage
