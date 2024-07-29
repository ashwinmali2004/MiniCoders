import prisma from './prismauser'

export async function getUserFullName(clerkId: string) {
  const user = await prisma.user.findUnique({
    where: { clerkId },
    select: { fullname: true },
  })
  return user?.fullname || null
}
