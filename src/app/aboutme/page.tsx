'use client'

import Image from "next/image";
import HistoryTree from "./HistoryTree";
import Link from "next/link";

function LinksImage({href, src, alt}: {href: string, src: string, alt: string}) {
  return (
    <>
      <Link
        href={href}
        className="p-5"
      >
        <Image
          src={src}
          width={70}
          height={70}
          alt={alt}
          className="rounded-xl transition hover:scale-105"
        />
      </Link>
    </>
  );
}

export default function Main() {
  return (
    <>
      <main className="bg-yellow-50 h-auto pb-20">
        <div className="text-center text-5xl pt-36 pb-16">About Me</div>
        <div className="flex m-20 p-10 bg-white">
          <Image
            src='/icon.jpg'
            width={200}
            height={200}
            alt="icon"
          />
          <div className="ml-10">
            hoge
          </div>
        </div>
        <div className="text-center text-3xl">
          これまでの軌跡
        </div>
        <HistoryTree />
        <div className="text-center text-3xl">
          Links
        </div>
        <div className="flex flex-wrap justify-center px-36 py-10">
          <LinksImage
            href="https://x.com/MidorikawaOgame"
            src="/aboutme_links/x.png"
            alt="x"
          />
          <LinksImage
            href="https://github.com/Ogame3334/"
            src="/aboutme_links/github.png"
            alt="github"
          />
          <LinksImage
            href="https://qiita.com/ogame0522"
            src="/aboutme_links/qiita.png"
            alt="qiita"
          />
        </div>
      </main>
    </>
  );
}
