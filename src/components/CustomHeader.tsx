import Image from "next/image"
import Link from "next/link"
import React from "react"

function HeaderButton({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center px-4 h-full bg-lime-300 bg-opacity-0 hover:bg-opacity-40 transition">
      <Link href={href} className="flex items-center h-full text-3xl md:text-2xl lg:text-3xl">
        {children}
      </Link>
    </div>
  );
}

export default function CustomHeader() {
  return (
    <div className="flex justify-between w-full h-16 md:h-18 lg:h-20 border-b border-color border-opacity-100 bg-lime-100 fixed top-0 left-0 z-50">
      <Link href="/" className="flex items-center h-full">
        <Image
          src="/ogame.png"
          width={1000}
          height={1000}
          alt="ogame's icon"
          style={{ width: 'auto', height: '100%' }}
        />
      </Link>
      <div className="hidden md:flex">
        <HeaderButton href="/">Top</HeaderButton>
        <HeaderButton href="/aboutme">About me</HeaderButton>
        <HeaderButton href="/works">Works</HeaderButton>
        <HeaderButton href="/blog">Blog</HeaderButton>
      </div>
    </div>
  );
}
