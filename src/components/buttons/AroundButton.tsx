import { ReactNode } from "react";
import './AroundButton.css'
import Link from "next/link";

interface AroundButtonProp {
  children?: ReactNode;
  className?: string;
  href?: string;
  onClick?: Function;
}

export default function AroundButton({ children, className, href, onClick }: AroundButtonProp) {
  return (
    <>
      {onClick ?
        <button onClick={() => onClick()} className={(className || '') + " around-btn around-btn-bordercircle text-center"}>
          <span>{children}</span>
        </button>
        :
        <Link href={href || ''} className={(className || '') + " around-btn around-btn-bordercircle text-center"}>
          <span>{children}</span>
        </Link>
      }
    </>
  );
}
