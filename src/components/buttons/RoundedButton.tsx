'use client';

import Link from "next/link";
import { ReactNode, useEffect } from "react";

interface RoundedButtonProp {
  children?: ReactNode;
  bg_color: string;
  href: string;
}

export default function RoundedButton({ children, bg_color, href }: RoundedButtonProp) {
  return (
    <Link href={href} className="relative inline-block text-center no-underline border border-gray-600 py-3 px-7 rounded-full overflow-hidden group">
      <span className="relative z-10 text-black transition-colors duration-200 group-hover:text-black">
        {children}
      </span>
      <div className={bg_color + " absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right group-hover:origin-left"}></div>
    </Link>
  );
}
