'use client'

import Link from "next/link";
import { ReactNode, useEffect } from "react";
import './RoundedButton.css'

interface RoundedButtonProp{
  children?: ReactNode;
  color: string;
  href: string;
}

export default function RoundedButton({children, color, href}: RoundedButtonProp) {
  useEffect(()=>{
    document.documentElement.style.setProperty('--rounded-btn-bg-color', color);
  }, [])
  
  return (
    <>
      <Link 
        href={href}
        className="rounded-btn rounded-btn-bgleft rounded-full"
      >
        <span>{children}</span>
      </Link>
    </>
  );
}
