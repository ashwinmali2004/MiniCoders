import React from 'react'
import Image from 'next/image'

type MenuLogoProps = {
  onClick(): void
}

export const MenuLogo = ({ onClick }: MenuLogoProps) => {
  return (
    <div  className="cursor-pointer mt-2 ml-2">
      <Image
        src="/logo.png"
        alt="Logo"
        width={60}
        height={60}
        priority
        onClick={onClick}
        className="cursor-pointer "
      />
    </div>
  )
}
