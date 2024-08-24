"use client";

import { useEffect, useState } from "react";
import WorkPanel from "./WorkPanel";
import { WorkInfo, WorkInfoDB } from "@/types/WorkInfo";

const workInfo: WorkInfo = {
  title: "面白い作品！！！",
  thumbnail: "/tuba.png",
  tags: ["game"],
  created_at: new Date(),
  updated_at: new Date(),
  id: "asoidjgldkcvnlzosruigh",
};

export default function Main() {
  const [works, setWorks] = useState<WorkInfo[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     return await fetch("/api/works", { method: "GET" });
  //   };

  //   const data = fetchData();

  //   data.then(async (res) => {
  //     const works = (await res.json()) as WorkInfo[];

  //     setWorks(works);
  //   });
  // }, []);
  return (
    <>
      <main className=" bg-red-50 h-auto min-h-full">
        <div className="text-center text-5xl pt-36 pb-16">Works</div>
        <div className="mx-10 my-5 p-5 bg-white rounded-2xl">
          <div>絞り込み</div>
        </div>
        <div className="flex flex-wrap justify-center mx-0 md:mx-20 lg:mx-32">
          {works.length == 0 ? (
            <>作品がありません</>
          ) : (
            works.map((work, index) => (
              <WorkPanel workInfo={work} key={`${index}`} />
            ))
          )}
        </div>
      </main>
    </>
  );
}
