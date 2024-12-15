import React from 'react'
import Image from 'next/image'
import Man from '@/../../public/assets/man.svg'
export default function AboutCards() {
  return (
    <div>
  <Image
  src={Man}
    height={100}
    width={100}
    alt="man"
  />
    </div>
  )
}
