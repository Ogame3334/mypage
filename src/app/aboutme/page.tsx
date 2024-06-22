'use client'

import Image from "next/image";
import HistoryTree from "./HistoryTree";

export default function Main() {
  return (
    <>
      <main className="bg-yellow-50 h-auto">
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
      </main>
    </>
  );
}
