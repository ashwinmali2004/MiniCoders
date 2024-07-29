'use server'

import { client } from '@/lib/prisma'
import { currentUser, redirectToSignIn } from '@clerk/nextjs'
import { onGetAllAccountDomains } from '../settings'

const absoluteUrl = (path: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL
  return `${baseUrl}${path}`
}

export const onCompleteUserRegistration = async (
  fullname: string,
  clerkId: string,
  type: string
) => {
  try {
    const registered = await client.user.create({
      data: {
        fullname,
        clerkId,
        type,
        subscription: {
          create: {},
        },
      },
      select: {
        fullname: true,
        id: true,
        type: true,
      },
    })

    if (registered) {
      return { status: 200, user: registered }
    } else {
      return { status: 500, message: 'Failed to register user' }
    }
  } catch (error) {
    console.error('Registration error:', error)
    return { status: 400, message: 'Error completing registration' }
  }
}

export const onLoginUser = async () => {
  const user = await currentUser()
  if (!user) {
    redirectToSignIn({ returnBackUrl: absoluteUrl('/auth/sign-in') })
    return { status: 401, message: 'User not authenticated' }
  }

  try {
    const authenticated = await client.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        fullname: true,
        id: true,
        type: true,
      },
    })

    if (authenticated) {
      const domains = await onGetAllAccountDomains()
      return { status: 200, user: authenticated, domain: domains?.domains }
    } else {
      return { status: 404, message: 'User not found' }
    }
  } catch (error) {
    console.error('Login error:', error)
    return { status: 400, message: 'Error logging in user' }
  }
}

//name
export const userFullName = async () => {
  const user = await currentUser();
  
  if (!user) {
    return { status: 401, message: 'User not found' };
  }

  try {
    const authenticatedUser = await client.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        fullname: true,
      },
    });

    if (!authenticatedUser) {
      return { status: 404, message: 'Authenticated user not found in database' };
    }

    return { status: 200, fullname: authenticatedUser.fullname };
  } catch (error) {
    console.error('Error fetching username:', error);
    return { status: 400, message: 'Error fetching username' };
  }
};